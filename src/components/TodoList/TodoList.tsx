import React, { useState } from "react"
import { TodoItem } from "../TodoItem/TodoItem"
import "./TodoList.css"


export interface TodoList{
    list: TodoItem[]
}

export const TodoList = ({todoList, onTodoSet}) => {
    const [filter, setFilter] = useState("")

    function toFilter(item: TodoItem) {
        if (filter === "all"){
            return true
        }
        if (filter === "notDone" && item.done === false){
            return true
        }
        if (filter === "done" && item.done === true){
            return true
        }
    }


    return(
        
    <>
        <div className="filter">
            <button onClick={()=>setFilter("all")} className="filter__button">
                Все задачи
            </button>
            <button onClick={()=>setFilter("notDone")} className="filter__button">
                Актуальные
            </button>
            <button onClick={()=>setFilter("done")} className="filter__button">
                Сделанные
            </button>
        </div>

        <ul className="list">
            {todoList.filter(item => toFilter(item)).map((item) =>(
                <li key={item.id}>
                    <TodoItem 
                        name = {item.name}
                        id = {item.id}
                        done={item.done}
                        onTodoSet={onTodoSet}
                    />
                </li>)
            )}
        </ul>
        </>
    )
}