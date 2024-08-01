import { TodoItem } from "../components/TodoItem/TodoItem";
import { TodoList } from "../components/TodoList/TodoList";

export async function postTodo(item: TodoItem): Promise<void>{
    return fetch('http://localhost:3000/todos', {
      method: 'POST',
      body: JSON.stringify({
        name: item.name,
        id: item.id,
        done: item.done,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
}

export async function getTodo():Promise<TodoList | void> {
  return fetch('http://localhost:3000/todos')
  .then((response) => response.json())
}