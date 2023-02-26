import * as React from 'react';
import image from '../images/man.png'
import { TodoContext } from '../TodoContext';
import './TodoCounter.css'

function TodoCounter() {

  const {totalTodos, completedTodos}  = React.useContext(TodoContext);

  return (
    <div>
      <div className='container-TodoCounter'>

        <img src={image} className='image-TodoCounter' ></img>
        <h2 className='TodoCounter'>To - Do</h2>

      </div>
      <h3 className='text-TodoCounter'>Has completado {completedTodos} de {totalTodos} To-Do's</h3>
    </div>
  );
}

export {TodoCounter}; 