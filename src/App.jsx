import { useEffect, useState } from 'react'
import './App.css'
import { TodoForm } from './components/TodoForm/TodoForm'
import { useList } from './useLIst'
import { TodoList } from './components/TodoList/TodoList'
import { getTodo } from './app/Todo'



function App() {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const todos = await getTodo();
      setTodoList(todos);
    };

    fetchTodos();
  }, []);
  
  const {list, createTodoItem, setTodoItem, doneTodoItem, deleteTodoItem} = useList(todoList);
  
  return <div>
    <TodoForm onCreate={createTodoItem}/>
    <TodoList 
      todoList={todoList}
      onTodoSet={setTodoItem}
      onTodoDone={doneTodoItem}
      onTodoDelete={deleteTodoItem}
      />
  </div>
}

export default App;

