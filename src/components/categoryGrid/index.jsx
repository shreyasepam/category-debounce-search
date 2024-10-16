import React, { useContext } from 'react'
import CategoryGridItem from './CategoryGridItem';
import CategoryContext from "../../providers/CategoryContext";

export default function CategoryGrid({items}) {
  const {products} = useContext(CategoryContext)
  return (
    <div className=''>
        <div>
            {products && Object.keys(products)?.map((item) => <CategoryGridItem    />)}
        </div>
    </div>
  )
}
