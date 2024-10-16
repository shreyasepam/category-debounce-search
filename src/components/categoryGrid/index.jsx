import React, { useContext } from 'react';
import CategoryGridItem from './CategoryGridItem';
import CategoryContext from '../../providers/CategoryContext';

export default function CategoryGrid() {
  const { products } = useContext(CategoryContext);
  return (
    <div className="rounded-s grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      {products?.data &&
        Object.keys(products?.data)?.map((item) => (
          <CategoryGridItem label={item} items={products.data[item]} />
        ))}
    </div>
  );
}
