import { useState } from "react";


export function useList(todoList) {

    const [list, setList] = useState(todoList);
    
    function createTodoItem(name){
      const newList = [...list, {
        name: name,
        id: crypto.randomUUID(),
        toggle: false,
    }]
      setList(newList);
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