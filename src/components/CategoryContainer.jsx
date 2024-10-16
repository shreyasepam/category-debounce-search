import React, { useEffect, useRef, useState } from 'react';
import ItemSearchInput from './ItemSearchInput';
import CategoryGrid from './categoryGrid';
import { Conifg, groupedByCategory } from '../utitles';
import CategoryContext from '../providers/CategoryContext';

export default function CategoryContainer() {
  const [products, setProducts] = useState(undefined);
  const productsRef = useRef(null);

  const onIntialFetch = async () => {
    try {
      const response = await fetch(Conifg.url);
      const data = await response.json();
      if (data && data?.products && data?.products?.length > 0) {
        const groupData = groupedByCategory(data?.products);
        setProducts(groupData);
        productsRef.current = groupData;
      } else {
        setProducts(undefined);
      }
    } catch (error) {
      setProducts(undefined);
    }
  };

  useEffect(() => {
    onIntialFetch();
  }, []);

  const onSearchInput = (value) => {
    const results = {};
    for (const [category, items] of Object.entries(productsRef.current)) {
      const filteredItems = items.filter((item) =>
        item.title.toLowerCase().includes(value.toLowerCase())
      );
      if (filteredItems.length > 0) {
        results[category] = filteredItems;
      }
    }
    setProducts(results);
  };

  return (
    <CategoryContext.Provider value={{ products }}>
      <div className="w-full">
        <ItemSearchInput
          value={''}
          onChange={onSearchInput}
          placeholder={'Search your item'}
          disabled={!productsRef.current}
        />
        <CategoryGrid />
      </div>
    </CategoryContext.Provider>
  );
}
