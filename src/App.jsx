import React from 'react';
import logo from './images/logo.png';
import ItemSearchInput from './ItemSearchInput';

const App = () => {


  const onSearchInpuit  = (value) => {
    console.log("myInputValue", value)
  }

  return(
  <div className="flex min-h-screen min-v-screen flex-col bg-gray-100">
    <ItemSearchInput value="" onChange={onSearchInpuit} />
</div>
)};

export default App;
