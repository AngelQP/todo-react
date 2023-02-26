import * as React from 'react';
import ReactDOM  from 'react-dom';
import img from '../images/img-modal.gif';
import './modal.css';

function Modal({children}) {
  return ReactDOM.createPortal(
    <div className='container-modal'>
      <div className='container'>
      <h3 className='title-modal'>Escribe un nuevo To-Do</h3>
      <img src={img} alt='imagen de referencia' className='img-modal'></img>
      {children}
      </div>
    </div>,
    document.getElementById('modal')
  );
}

export {Modal};