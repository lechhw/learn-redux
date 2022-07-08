import React, { memo } from 'react';

const TodoItem = memo(({ todo, onToggle }) => {
  return (
    <li
      style={{ textDecoration: todo.done ? 'line-through' : 'none' }}
      onClick={() => onToggle(todo.id)}
    >
      {todo.text}
    </li>
  );
});

export default TodoItem;
