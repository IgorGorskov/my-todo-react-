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
        <div className= {done ? 'done item' : "item"} >
            <h2 className="item__name">{name}</h2>
            <button onClick={handleDone} className="item__done-button item__button">Сделано</button>
            <button onClick={handleDelete} className="item__delet-button item__button">Удалить</button>
        </div>
    )
        
}