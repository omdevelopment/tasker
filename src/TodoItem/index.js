import React from 'react';
import { CompleteIcon } from '../TodoIcon/CompleteIcon';
import { DeleteIcon } from '../TodoIcon/DeleteIcon';
import './TodoItem.css';

function TodoItem(props) {
  return (
    <li className={`bg-white w-5/6 md:w-3/5 mx-auto flex mt-6 relative justify-center align-items-center shadow shadow-lg rounded rounded-3xl h-20 font-['Roboto'] opacity-90 ${props.completed && 'opacity-40'}`}>
      <CompleteIcon
        completed={props.completed}
        onComplete={props.onComplete}
      />
      <p className={`TodoItem-p my-auto ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text} 
      </p>
      <span 
      onClick={props.onDelete}
      className="Icon Icon-delete rounded-full shadow shadow-lg bg-[#CCC] opacity-100 border-2 border-gray-500 text-red-600">
        X
      </span>
    </li>
  );
}

export { TodoItem };
