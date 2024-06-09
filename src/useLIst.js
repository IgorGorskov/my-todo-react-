export function useList() {
  
    const [list, setList] = useState([]);
    
    function createTodoItem(name){
      const newList = [...list, {
        name: name,
        id: crypto.randomUUID(),
        toggle: false,
    }]
      setList(newList);
  }
  
    
    function setTodoItem(id, newName){
      newList = list.map(item, ()=>(
        item.id === id ? {...item, name: newName} : {item}
      ))
      setList(newList)
    }
    
    function toggleTodoItem(id){
      const newList = list.map(item, ()=>(
        item.id === id ? {...item, toggle: !item.toggle} : {item}
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
      toggleTodoItem,
      deleteTodoItem,
    }
  }