import React from "react"
import "./TodoItem.css"

export interface TodoItem {
    name: string,
    id: string,
    done: boolean,
  }


  

export const TodoItem = ({name, id, done, onTodoSet, onTodoDone, onTodoDelete}) =>{
    const handleDelete = () => {
        onTodoDelete(id)
    }
    const handleSet = (event) => {
        onTodoSet(id, event.value.trim())
    }

    const handleDone = () => {
        onTodoDone(id)
    }


    return (
        <div className= {done ? 'done todo-item' : "todo-item"} >
            <h2 className="todo-name">{name}</h2>
            <button onClick={handleDone} className="todo-done-button todo-button">Сделано</button>
            <button onClick={handleDelete} className="todo-delet-button todo-button">Удалить</button>
        </div>
    )
        
}