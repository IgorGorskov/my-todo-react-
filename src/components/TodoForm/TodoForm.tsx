import { useList } from "../../useLIst"
import "./TodoForm.css"
import React, { useState } from "react"


export const TodoForm = ({onCreate}) => {
    // const handleCreate = () => {
    //     onCreate(value)
    // }
    const handleSubmit = (event) => {
        if(value.trim() != ""){
            event.preventDefault();
            onCreate(value)
            setValue('')
        }
        return
    }
    const [value, setValue] = useState('')
    return (
        <form className="form" onSubmit={handleSubmit}> 
            <input className="form__input" placeholder="Новое дело" tabIndex={-1}  type="text" value={value} onChange={(e) => setValue(e.target.value)}/>
            <button className="form__button">Добавить</button>
        </form>
    )
}