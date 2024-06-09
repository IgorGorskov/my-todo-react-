import React from "react"
import "./TodoItem.css"

export interface TodoItem {
    name: string,
    id: string,
  }
  

export const TodoItem = ({name}) =>{
    return (
        <div className="todo-item">
            <h2 className="todo-name">{name}</h2>
            <button className="todo-done-button todo-button">Сделано</button>
            <button className="todo-delet-button todo-button">Удалить</button>
        </div>
    )
        
}