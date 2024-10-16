import React, { useContext } from 'react';
import CategoryGridItem from './CategoryGridItem';
import CategoryContext from '../../providers/CategoryContext';

export default function CategoryGrid({ items }) {
  const { products } = useContext(CategoryContext);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 rounded-s mt-4">
      {products &&
        Object.keys(products)?.map((item) => (
          <CategoryGridItem label={item} items={products[item]} />
        ))}
    </div>
  );
}
