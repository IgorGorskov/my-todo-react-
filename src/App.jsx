import { useEffect, useState } from 'react'
import './App.css'
import { TodoForm } from './components/TodoForm/TodoForm'
import { useGetList } from "./hooks/useGetList" 
import { useList } from './useLIst'
import { TodoList } from './components/TodoList/TodoList'




function App() {
  const todoList = useGetList()

  const {list, createTodoItem, setTodoItem, doneTodoItem, deleteTodoItem} = useList(todoList);
  if(todoList.status === "pending"){
    return <div>Loading...</div>
  }
  if (todoList.status === "success"){
    return <div>
    <TodoForm onCreate={createTodoItem}/>
    <TodoList 
      todoList={todoList.data}
      onTodoSet={setTodoItem}
      onTodoDone={doneTodoItem}
      onTodoDelete={deleteTodoItem}
      />
  </div>
  }
}

export default App;

