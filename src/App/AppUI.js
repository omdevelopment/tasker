import React from 'react';
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { Modal } from '../Modal';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoForm } from '../TodoForm';
import { NewTodoCard } from '../NewTodoCard';

function AppUI() {
    const {error, loading, searchedTodos, completeTodo, deleteTodo, openModal, setOpenModal} = React.useContext(TodoContext);

    return(
        <div className="grid md:grid-cols-2 grid-cols-1 min-w-full min-h-screen bg-general">
             <CreateTodoButton 
                setOpenModal={setOpenModal}
               />
            <NewTodoCard />
            <div className="mx-auto w-full md:w-3/4 bg-none md:bg-gray-300 backdrop-blur-xl opacity-70">
                <TodoCounter />
                <TodoSearch />
                
                <TodoList>
                    {error && <p className='text-center'>Hubo un error</p>}
                    {loading && <p className='text-center'>Cargando</p>}
                    {(!loading && !searchedTodos.length) && <p className='text-center'>Crea tu primera tarea</p>}
                    
                    {searchedTodos.map(todo => (
                        <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                        />
                    ))}
                </TodoList>
                
               {openModal && (
                <Modal>
                    <TodoForm />
                </Modal>
               )}

              
                   
                
            </div>
      </div>
    );
}

export { AppUI };



                