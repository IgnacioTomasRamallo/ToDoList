import React, { useState } from 'react'
import { ToDo } from './ToDo';
import './toDoApp.css';

export const ToDoApp = () => {
    //Hooks useState
    //el primero me devuelve el valor del estado el segundo me devuelve el valor cambiado

    const [title, setTitle] = useState();
    const [toDos, setToDos] = useState([]);

    //event OnChange 
    function handleChange(event){
        const value = event.target.value;
        setTitle(value)
    }

    function handleSubmit(event){
        event.preventDefault();

        const newToDo = {
            id: crypto.randomUUID(),
            title: title,
            complete: false,
        };
        /* opcion 1
        const temp = [...toDos];
        temp.unshift(newToDo);
        setToDos(temp);

        */
        /*Opcion 2*/ 
        setToDos([...toDos, newToDo]);
        
        setTitle('');
    }

    function handleUpdate(id, value){
        const temp = [...toDos];
        const item = temp.find((item) => item.id === id);
        item.title = value;
        setToDos(temp);
    }
    
    function handleDelete(id){
        const temp = toDos.filter((item)=> item.id !== id);
        setToDos(temp);
    }

    return (
        <div className='toDoContainer'>
            <h1>To Do List</h1>
            <form className='toDoCreateForm' onSubmit={ handleSubmit } >
                <input onChange={ handleChange } className='toDoInput' value={title}/>

                <input 
                    onClick={ handleSubmit } 
                    type='submit' 
                    value='Create To Do' 
                    className='buttonCreate' 
                />
            </form>

            <div className='toDosContainer'>
                {toDos.map((item) => (
                        <ToDo key={item.id} item={item} onUpdate={ handleUpdate } onDelete={handleDelete}/>
                    ))}
            </div>
        </div>
    )
}

export default ToDoApp;

