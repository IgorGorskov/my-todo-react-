import { useList } from "../../useLIst"
import "./TodoForm.css"
import React, { useState } from "react"


export const TodoForm = ({onCreate}) => {
    // const handleCreate = () => {
    //     onCreate(value)
    // }
    const handleSubmit = (event) => {
        event.preventDefault();
        onCreate(value)
        setValue('')
    }
    const [value, setValue] = useState('')
    return (
        <form onSubmit={handleSubmit}> 
            <input tabIndex={-1}  type="text" value={value} onChange={(e) => setValue(e.target.value)}/>
            <button >Новое дело</button>
        </form>
    )
}