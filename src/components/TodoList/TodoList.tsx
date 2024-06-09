import React, { FC } from "react"
import { TodoItem } from "../TodoItem/TodoItem"
import "./TodoList.css"



export interface TodoList {
    todoList: TodoItem[];
}

export const todoList: TodoItem[] = [
    {
        name: 'work',
        id: crypto.randomUUID()
    },
    {
        name: 'eat',
        id: crypto.randomUUID()
    }
]

export const TodoList: FC<TodoList> = ({todoList}) => {
    return(
        <ul className="todo-list">
            {todoList.map((item) =>(
                <li key={item.id}>
                    <TodoItem name = {item.name}/>
                </li>)
            )}
        </ul>
    )
}