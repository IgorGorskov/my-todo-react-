import { useState } from "react";
import { getTodo, postTodo } from "./api/Todo";


export function useList(todoList) {

    const [list, setList] = useState(todoList);
    
    

    async function createTodoItem(name){
      const newItem = {
        name: name,
        id: crypto.randomUUID(),
        done: false,
      }
      postTodo(newItem)
    }
  
    
    function setTodoItem(id, newName){
      const newList = list.map(item, () => (
        item.id === id ? {...item, name: newName} : {item}
      ))
      setList(newList)
    }
    
    function doneTodoItem(id){
      const newList = list.map(item => (
        item.id === id ? {...item, done: !item.done} : item
      ))
      setList(newList)
    }
    
    function deleteTodoItem(id){
      const newList = list.filter(item => item.id !== id );
      setList(newList);
    }
    
    return {
      list,
      createTodoItem,
      setTodoItem,
      doneTodoItem,
      deleteTodoItem,
    }
  }