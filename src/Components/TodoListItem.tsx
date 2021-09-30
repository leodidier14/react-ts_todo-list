import React from 'react';

interface Props {
    todo: Todo;
    toggleTodo: ToggleTodo
}

const TodoListItem: React.FC<Props> = ({ todo, toggleTodo }) => {
    return (
        <li>
          <label
            style={{ textDecoration: todo.closed ? 'line-through' : undefined }}
          >
            <input 
              type="checkbox" 
              checked={todo.closed} 
              onChange={() => {
                toggleTodo(todo)
              }}
              /> {todo.text}
          </label>
        </li>
      );
};

export default TodoListItem;