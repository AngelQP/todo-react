import * as React from 'react';
import './TodoList.css'

function TodoList(props) {
  return(
    <section className='container-TodoList' >
      <ul className='task-TodoList' >
        {props.children}
      </ul>
    </section>
  );
}

export {TodoList};