import React from 'react';
import './TodoItem.css';

function TodoItem(props) {
  return (
    <li className="bg-white flex mt-6 relative justify-center align-items-center shadow shadow-lg rounded rounded-3xl h-20 font-['Roboto']">
      <span className={`Icon Icon-check pointer-events-auto flex absolute ${props.completed && 'Icon-check--active'}`}>
        √
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete">
        X
      </span>
    </li>
  );
}

export { TodoItem };
