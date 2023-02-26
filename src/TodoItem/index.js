import * as React from 'react';
import trash from '../images/icons8-eliminar.svg';
import './TodoItem.css';

function TodoItem(props) {

  const onComplete = () => {
    alert('Ya completaste el todo');
  };
  const onDelete = () => {
    alert('Borraste el todo')
  }

  return (
    <li className='container-TodoItem'>
      <div className='container-TodoItem--option'>
        <input type='checkbox' className='input-TodoItem' defaultChecked={props.inspect} onClick={props.onComplete}></input>
        <p className={`text-TodoItem ${props.completed&&'text-TodoItem--completed'}`}>{props.text}</p>
      </div>
      <img src={trash} className='img-TodoItem' onClick={props.onDelete}></img>
    </li>
  );
}

export {TodoItem};