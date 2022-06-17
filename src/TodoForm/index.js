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
            <p>Describe tu nueva tarea</p>
            <textarea 
                className="text-black rounded-xl w-60 h-40 mt-4 pt-2 pl-2 mb-20"
                value={newTodoValue}
                onChange={onChangeValue}
                placeholder="Cortar cebolla.."
            />
            <div className="grid grid-cols-2">
                <button
                    className=""
                    type="button"
                    onClick={onCancel}
                >
                    Cancelar
                </button>
                <button
                    type="submit"
                >
                    Agregar
                </button>
            </div>
        </form>
    )
}

export { TodoForm };