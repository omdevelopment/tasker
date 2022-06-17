import React from 'react';

function TodoCounter() {
  return (
    <React.Fragment>
      <h1 className="font-['Raleway'] font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-center mt-12">Your tasks</h1>
      <h2 className="font-['Roboto'] font-bold text-xl text-center">Has completado 2 de 3 TODOs</h2>
    </React.Fragment>
   
  );
}

export { TodoCounter };
