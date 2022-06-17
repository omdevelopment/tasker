import React from 'react';
import { AppUI } from './AppUI';
import { TodoProvider } from '../TodoContext'; 
// import './App.css';

/*const defaulTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el cursso de intro a React', completed: true },
  { text: '3tarea', completed: false },
  { text: '4tarea', completed: false },
];*/


function App() {
 

  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
    
  );
}

export default App;
