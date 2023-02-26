import * as React from 'react';
import './CreateTodoButton.css'

function CreateTodoButton(props) {

  const toggleModal = () => {

    props.setOpenModal(!props.openModal);

  }

  return(
    <button 
    className='container-CreateTodoButton'
    onClick={toggleModal}
    >
      +
    </button>
  );
}

export {CreateTodoButton};