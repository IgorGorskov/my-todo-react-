import React from "react"
import "./TodoItem.css"
import { deleteTodo } from "../../api/Todo"
import { useMutation } from "@tanstack/react-query"
import { queryClient } from "../../api/queryClient"

export interface TodoItem {
    name: string,
    id: string,
    done: boolean,
  }


  

export const TodoItem = ({name, id, done, onTodoSet, onTodoDone}) =>{
    const deleteQuery = useMutation({
        mutationFn: () => deleteTodo(id),
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ["todo"]})
            console.log("del")
        }
    }, queryClient)

    const handleDelete = () => {
        deleteQuery.mutate()
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