import React, { useEffect, useRef, useState } from 'react';
import ItemSearchInput from './ItemSearchInput';
import CategoryGrid from './categoryGrid';
import { Conifg, groupedByCategory } from '../utitles';
import CategoryContext from '../providers/CategoryContext';
import HandlingView from './HandlingView';

export default function CategoryContainer() {
  const [products, setProducts] = useState({
    loading: false,
    data: undefined,
    error: undefined,
  });
  const productsRef = useRef(null);

  const onIntialFetch = async () => {
    try {
      setProducts({
        loading: true,
      });
      const response = await fetch(Conifg.url);
      const data = await response.json();

      if (data && data?.products && data?.products?.length > 0) {
        const groupData = groupedByCategory(data?.products);
        setProducts({
          data: groupData,
        });
        productsRef.current = groupData;
      } else {
        setProducts({
          error: 'No items found.',
        });
      }
    } catch (error) {
      setProducts({
        error: 'Somthing went wrong',
      });
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
    const _result = Object.keys(results).length > 0;
    setProducts({
      data: _result ? results : undefined,
      error: _result ? '' : 'No items found.',
    });
  };

  return (
    <CategoryContext.Provider value={{ products }}>
      <div className="relative w-full pb-4">
        <div className="sticky top-0 z-20 w-full bg-gray-100 py-4">
          <h1 className="mb-4 text-center text-4xl font-bold">Products</h1>
          <ItemSearchInput
            onChange={onSearchInput}
            placeholder={'Search your item'}
          />
        </div>
        {products.loading || products.error ? (
          <HandlingView error={products.error} />
        ) : (
          <CategoryGrid />
        )}
      </div>
    </CategoryContext.Provider>
  );
}
