import React from "react"
import { TodoItem } from "../TodoItem/TodoItem"
import "./TodoList.css"



export const TodoList = ({todoList, onTodoSet, onTodoDone, onTodoDelete}) => {
    return(
        <ul className="list">
            {todoList.map((item) =>(
                <li key={item.id}>
                    <TodoItem 
                        name = {item.name}
                        id = {item.id}
                        done={item.done}
                        onTodoSet={onTodoSet}
                        onTodoDelete={onTodoDelete}
                        onTodoDone={onTodoDone}
                    />
                </li>)
            )}
        </ul>
    )
}