import React, { useState } from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ setTodo, allTodos, todos, handleSelection}) => {

  const [draggedIndex, setDraggedIndex] = useState(null);

  // Handle drag start and set the dragged item's index
  const handleDragStart = (index) => {
    setDraggedIndex(index);
  };

  // Handle drag over and rearrange the list dynamically
  const handleDragOver = (index) => {
    if (index === draggedIndex) return;

    const draggedTodo = todos[draggedIndex];
    const remainingTodos = todos.filter((_, i) => i !== draggedIndex);

    const updatedTodos = [
      ...remainingTodos.slice(0, index),
      draggedTodo,
      ...remainingTodos.slice(index),
    ];

    setTodo(updatedTodos);
    setDraggedIndex(index);
  };

  // Reset the dragged index on drop
  const handleDrop = () => setDraggedIndex(null);

  const deleteItem = (index) => {
    const updatedTodos = [
      ...allTodos.slice(0, index),
      ...allTodos.slice(index + 1)
    ]
    setTodo(updatedTodos)
  }

  return (
    <ul className="w-full">
      {todos.length === 0 ? (
        <li className="text-center text-gray-500">No todos yet</li>
      ) : (
        todos.map((todo, index) => (
          <TodoItem
            key={index}
            todo={todo}
            handleSelection={() => handleSelection(index)}
            handleDragStart={() => handleDragStart(index)}
            handleDragOver={(e) => {
              e.preventDefault()
              handleDragOver(index)
            }}
            handleDrop={handleDrop}
            handleDeleteItem={() => deleteItem(index)}
          />
        ))
      )}
    </ul>
  );
};

export default TodoList;
