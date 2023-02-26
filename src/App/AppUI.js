import * as React from 'react';

import { TodoForm } from '../TodoForm';
import { TodoContext } from '../TodoContext';
import {TodoCounter} from '../TodoCounter';
import {TodoSearch} from '../TodoSearch'
import {TodoList} from '../TodoList'
import {TodoItem} from '../TodoItem'
import {CreateTodoButton} from '../CreateTodoButton'
import {Modal} from '../modal'

function AppUI() {

  const {
    error,
    loading,
    searchedTodos,
    toggleTodo,
    deleteTodo,
    openModal,
    setOpenModal
  } = React.useContext(TodoContext);

  return (
    <React.Fragment>

      <TodoCounter/>

      <TodoSearch/>
      
      
      <TodoList>
        {error && <p>Desesperate, hubo un error...</p>}
        {loading && <p>Estamos cargando no desesperes</p>}
        {(!loading && !searchedTodos.length) && <p>¡Crea tu primer ToDo!</p>}
        {searchedTodos.map (todo => (
          <TodoItem 
          key={todo.text} 
          text={todo.text} 
          inspect={todo.completed&&"Checked"}
          completed={todo.completed}
          onComplete={() => toggleTodo(todo.text)}
          onDelete={() => deleteTodo(todo.text)}
          
          /> ))}
      </TodoList>

      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}

      <CreateTodoButton 
        setOpenModal={setOpenModal}
        openModal={openModal}
      />

    </React.Fragment>
  );
}

export {AppUI};