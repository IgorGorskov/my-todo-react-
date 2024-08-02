import { useEffect, useState } from 'react'
import './App.css'
import { TodoForm } from './components/TodoForm/TodoForm'
import { useGetList } from "./hooks/useGetList" 
import { TodoList } from './components/TodoList/TodoList'




function App() {
  const todoList = useGetList()

  if(todoList.status === "pending"){
    return <div>Loading...</div>
  }
  if (todoList.status === "success"){
    return <div>
      <h1>TodoApp</h1>
      <TodoForm/>
      <TodoList 
        todoList={todoList.data}
        />
  </div>
  }
}

export default App;

