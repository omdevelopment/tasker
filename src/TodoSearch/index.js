import React from 'react';
import { TodoContext } from '../TodoContext';

function TodoSearch() {

  const {searchValue, setSearchValue} = React.useContext(TodoContext);

  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };


  return [
    <div className="flex mt-6 mb-12 bg-gray-100 rounded-2xl px-2 py-2 mx-auto w-3/6 shadow shadow-lg grid grid-cols-4 opacity-85">
      <input 
      onChange={onSearchValueChange}
      className="bg-gray-100 col-span-3 rounded-3xl placeholder:text-gray-400 pl-4 py-2" 
      value={searchValue}
      placeholder="Que desea buscar ?" />
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#d85521" className="bi bi-search relative left-8 top-2" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/></svg>
       
    </div>
    
  ];
}

export { TodoSearch };
