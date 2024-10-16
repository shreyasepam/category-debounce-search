import React, { useState } from 'react';
import { useDebounce } from '../../customHook/useDebounce';

export default function ItemSearchInput({
  value = "",
  onChange,
  placeholder,
  disabled = false,
  fullWidth,
  className,
}) {
  const [input, setInput] = useState(value);
  const debounceInput = useDebounce(onChange, 500);

  const onHandleChange = (event) => {
    const { value } = event.target;
    setInput(value);
    debounceInput(value);
  };

  return (
    <div className="flex w-full justify-center">
      <input
        className={` ${
          fullWidth ? 'w-full' : 'w-full md:w-3/4'
        } ${className} rounded border-2 border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none`}
        value={input}
        onChange={onHandleChange}
        placeholder={placeholder}
        disabled={disabled}
      />
    </div>
  );
}
