import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
// import './App.css';

const todos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el cursso de intro a React', completed: false },
  { text: 'Llorar con la llorona', completed: false },
  { text: 'LALALALAA', completed: false },
];

function App() {
  return (
      <div className="grid grid-cols-2 min-w-full min-h-screen bg-general">
        <div className="relative max-w-xl">
          <div className="bg-gray-100 opacity-70 w-full px-12 absolute bottom-20 left-20 rounded-2xl grid grid-cols-1 shadow shadow-lg">
            <h1 className="mt-12 mb-8 text-4xl font-['Roboto'] font-extrabold text-[#d85521]">Crea un nuevo recordatorio</h1>
            <p className='font-bold text-[#d85521]'>Task Name</p>
            <input type="text" placeholder='Enter your task name..' className='bg-gray-400 pl-4 my-1 rounded-lg h-12 font-medium opacity-70 placeholder:text-black'/>
            <button className='font-semibold text-gray-100 hover:text-[#d85521] hover:bg-gray-300 bg-[#d85521] px-8 py-3 mt-6 rounded-xl'>Crear Tarea</button>
            <img className='mt-8 mx-auto' src="./card-animation.gif" alt='img' />
          </div>
          
        </div>
        <div className="mx-12">
        <TodoCounter />
        <TodoSearch />

        <TodoList>
          {todos.map(todo => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
            />
          ))}
        </TodoList>

        <CreateTodoButton />
        </div>
      </div>
      
      
  );
}

export default App;
