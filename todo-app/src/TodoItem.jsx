import React from 'react'
import check from './assets/images/icons/icon-check.svg'
import cross from './assets/images/icons/icon-cross.svg'

const TodoItem = ({ todo, handleSelection, handleDragStart, handleDragOver, handleDrop, handleDeleteItem}) => {
  return (
    <li
      className="flex items-center justify-between w-full p-2 border-b border-gray-300"
      draggable
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <div className='flex'>

        {/* Round Multicolored Checkbox */}
        <div
          className={`custom-checkbox ${todo.selected ? 'checked' : ''}`}
          onClick={handleSelection}
        >
          <div className="checkmark">
            <img src={check} alt="checkbox" />
          </div>
        </div>

        {/* Todo Text */}
        <span
          className={`ml-4 ${
            todo.selected ? 'line-through text-gray-500' : ''
          }`}
        >
          {todo.text}
        </span>
      </div>
      <button onClick={handleDeleteItem}>
        <img src={cross} alt="" />
      </button>
    </li>
  );
};

export default TodoItem;
