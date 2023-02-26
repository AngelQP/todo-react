import * as React from 'react';
import lupa from '../images/lupa.png';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css';

function TodoSearch() {

  const {searchValue, setSearchValue} = React.useContext(TodoContext);

  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  }

  return (
    <div className='container-TodoSearch'>
      <input value={searchValue} placeholder='Search...' className='input-TodoSearch' onChange={onSearchValueChange}>
      </input>
      <img src={lupa} className='icon-TodoSearch' ></img>
    </div>
  );
}

export {TodoSearch};