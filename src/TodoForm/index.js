import React from "react";
import { TodoContext } from "../TodoContext";

function TodoForm() {
    const [newTodoValue, setNewTodoValue] = React.useState('');
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const onChangeValue = (event) => {
        setNewTodoValue(event.target.value);
        console.log(event.target.value);
    };

    const onCancel = () => {
        setOpenModal(false);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    return (
        <form onSubmit={onSubmit}>
            <p className="text-gray-100 font-semibold text-xl">Describe tu nueva tarea</p>
            <textarea 
                className="text-black rounded-xl w-60 h-40 my-4 pt-2 pl-2 mb-8"
                value={newTodoValue}
                onChange={onChangeValue}
                placeholder="Cortar cebolla.."
            />
            <div className="grid grid-cols-2">
                <button
                    className="bg-gray-300 rounded-lg text-gray-900 py-2 font-semibold mr-3"
                    type="button"
                    onClick={onCancel}
                >
                    Cancelar
                </button>
                <button
                    className="bg-green-900 rounded-lg ml-3 py-2"
                    type="submit"
                >
                    Agregar
                </button>
            </div>
        </form>
    )
}

export { TodoForm };