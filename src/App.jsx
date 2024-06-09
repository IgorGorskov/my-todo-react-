import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TodoList, todoList } from './components/TodoList/TodoList'
import { TodoForm } from './components/TodoForm/TodoForm'



function App() {

  return <div>
    <TodoForm/>
    <TodoList todoList={todoList}/>
  </div>
}

export default App;

