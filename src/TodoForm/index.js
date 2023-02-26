import * as React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css'

function TodoForm() {

  const [newTodoValue, setNewTodoValue] = React.useState('');

  const {addTodo, setOpenModal} = React.useContext(TodoContext);

  const onChange = (event) => {
    // tarea pendiente
    setNewTodoValue(event.target.value);
  };
  const onCancel = () => {
    // tarea pendiente
    setOpenModal(false);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };
  return(
    <form onSubmit={onSubmit} className='content-form'>
      <textarea 
        value= {newTodoValue}
        onChange= {onChange}
        placeholder='Cortar la cebolla para el almuerzo'
        autoFocus
        className='text-form'
      />
      <div className='content-buttons'>
        <button type='button' onClick={onCancel} className='btn btn-cancel'>Cancelar</button>
        <button type='submit' className='btn btn-confirm'>Añadir</button>
      </div>
    </form>
  );
}

export {TodoForm};