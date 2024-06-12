import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TodoForm } from './components/TodoForm/TodoForm'
import { useList } from './useLIst'
import { TodoList } from './components/TodoList/TodoList'



function App() {
  
  
  const {list, createTodoItem, setTodoItem, doneTodoItem, deleteTodoItem} = useList();
  
  return <div>
    <TodoForm onCreate={createTodoItem}/>
    <TodoList 
      todoList={list}
      onTodoSet={setTodoItem}
      onTodoDone={doneTodoItem}
      onTodoDelete={deleteTodoItem}
      />
  </div>
}

export default App;

