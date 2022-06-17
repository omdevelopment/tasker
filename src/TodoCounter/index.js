import React from 'react';
import { TodoContext } from '../TodoContext';

function TodoCounter() {
  const {totalTodos, completedTodos} = React.useContext(TodoContext);

  return (
    <React.Fragment>
      <h1 className="font-['Raleway'] font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-[#22c1c3] to-[#df2dfd] text-center mt-2 md:mt-12">Pendientes</h1>
      <h2 className="font-['Roboto'] font-bold text-gray-700 text-2xl text-center">Has completado {completedTodos} de {totalTodos} TODOs</h2>
    </React.Fragment>
   
  );
}

export { TodoCounter };
