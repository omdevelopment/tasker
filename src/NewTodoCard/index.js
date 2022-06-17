import React from "react";
import { TodoContext } from "../TodoContext";

function NewTodoCard() {
    const [newTodoValue, setNewTodoValue] = React.useState('');
    
    const onChangeValue = (event) => {
        setNewTodoValue(event.target.value);
        console.log(event.target.value);
    };
    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    return (
    <div className="relative max-w-lg">
        <form 
        onSubmit={onSubmit}
        className="bg-gray-100 opacity-80 w-full px-8 absolute bottom-80 left-60 rounded-2xl hidden md:grid grid-cols-1 shadow shadow-lg">
            <h1 className="mt-12 mb-8 text-4xl font-['Roboto'] font-extrabold text-[#d85521]">Crea un nuevo recordatorio</h1>
            <p className='font-bold text-[#d85521]'>Task Name</p>
            <input 
            type="text" 
            value={newTodoValue}
            onChange={onChangeValue}
            placeholder='Enter your task name..' 
            className='bg-gray-300 pl-4 my-1 rounded-lg h-12 font-medium opacity-70 placeholder:text-black'/>
            <button 
            type="submit"
            className='font-semibold text-gray-100 hover:text-[#d85521] hover:bg-gray-300 bg-[#d85521] px-8 py-3 my-6 rounded-xl'>
                Crear Tarea
            </button>
            
        </form>

    </div>
    )
}
/* <img className='mt-8 mx-auto' src="./card-animation.gif" alt='img' /> */
export { NewTodoCard };