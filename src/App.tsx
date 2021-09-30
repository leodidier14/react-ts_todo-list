import React, { useState } from 'react';
import TodoList from './Components/TodoList'
import AddTodoForm from './Components/AddTodoFrom'


const initialTodos: Todo[] = [
  {
    text: 'Task 1',
    closed: false,
  },
  {
    text: 'Task 2',
    closed: true,
  },
];

function App() {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          closed: !todo.closed,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const addTodo: AddTodo = (text: string) => {
    const newTodo = { text, closed: false};
    setTodos([...todos, newTodo]);
  };

  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo}/>
      <AddTodoForm addTodo={addTodo} />
    </>
  );
}

export default App;