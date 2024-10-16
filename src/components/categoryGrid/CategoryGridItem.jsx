import React, { useState } from 'react';
import ItemSearchInput from '../ItemSearchInput';

export default function CategoryGridItem({ label, items }) {
  const [input, setInput] = useState('');

  const onChange = (value) => {
    setInput(value);
  };

  const onFilter = (item) => {
    return !input || item?.title?.toLowerCase().includes(input.toLowerCase());
  };

  const filteredItems =items && items?.filter(onFilter);

  return (
    <div className="rounded-s flex h-72 flex-col bg-white p-4 align-middle shadow">
      <div className="z-10 bg-white">
        <h1 className="text-center text-lg font-bold capitalize">{label}</h1>
        <ItemSearchInput
          className="mt-2"
          placeholder={`${label} search`}
          fullWidth
          onChange={onChange}
        />
      </div>
      <ul className="mt-2 overflow-auto">
        {filteredItems?.length > 0 ? (
          filteredItems.map((item) => (
            <li key={item.id} className="mt-2">
              {item.title}
            </li>
          ))
        ) : (
          <li className="text-red-500">No items found.</li>
        )}
      </ul>
    </div>
  );
}
