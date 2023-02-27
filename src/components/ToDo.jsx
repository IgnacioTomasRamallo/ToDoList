import React, { useState } from 'react';

export const ToDo = ({ item, onUpdate, onDelete }) => {

    const [isEdit, setIsEdit] = useState(false);

    //Funcion para editar los valores del ToDo
    function FormEdit() {
        
        //Evento Form Handle Submit On Submit
        function handleSubmit(event){
            event.preventDefault();
        }
        const [newValue, setNewValue] = useState(item.title);
        //Evento Input On Change
        function handleChange(event){
            const value = event.target.value;
            setNewValue(value);
        }

        function handleClick(){
            onUpdate(item.id, newValue);
            setIsEdit(false);
        }

        return (
            <form className='toDoUpdateForm' onSubmit={handleSubmit}>
                <input 
                    type="text"  
                    className='toDoInput' 
                    onChange={ handleChange } 
                    value={newValue} 
                />
                <button className='button' onClick={handleClick}>Update!</button>
            </form>
            )
    }
    //Funcion del Elemento ToDo
    function ToDoElement() {
        return (
            <div className='toDoInfo'>
                <span className='todoTitle'>{item.title}</span>
                <div>
                    <button className='button botones' onClick={()=> setIsEdit(true)} >Edit</button>
                    <button  className='buttonDelete botones' onClick={(e)=> onDelete(item.id)}>Delete</button> 
                </div>
            </div>
        )
    }

    return (
        <div className='toDo'>
            {isEdit ? <FormEdit /> : <ToDoElement />}
        </div>
    )
}
