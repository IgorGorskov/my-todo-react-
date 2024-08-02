import "./TodoForm.css"
import React, { useState } from "react"


import { useMutation } from "@tanstack/react-query"
import { queryClient } from "../../api/queryClient"
import { postTodo } from '../../api/Todo'

export const TodoForm = () => {

    const [value, setValue] = useState('')

    const postQuery = useMutation({
        mutationFn: () => {
            const todo = { name: value.trim(), id: crypto.randomUUID(), done: false };
            return postTodo(todo)
        },
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ["todo"]})
            setValue('')
        }
    }, queryClient)

    const handleSubmit = (event) => {
        if(value.trim() !== ""){
            event.preventDefault();
            postQuery.mutate();
        }
    }

    return (
        <form className="form" onSubmit={handleSubmit}> 
            <input className="form__input" placeholder="Новое дело" tabIndex={-1}  type="text" value={value} onChange={(e) => setValue(e.target.value)}/>
            <button className="form__button">Добавить</button>
        </form>
    )
}