import React, { useState } from 'react';
import { useDebounce } from '../customHook/useDebounce';

export default ItemSearchInput = ({ value, onChange }) => {
  const [input, setInput] = useState(value);
  const debounceInput = useDebounce(onChange, 1000);

  const onHandleChange = (event) => {
    const { value } = event.target;
    setInput(value);
    debounceInput(value);
  };

  return (
    <div className="">
      <input value={input} onChange={onHandleChange} />
    </div>
  );
};
