import React from 'react';

const TodoInput = ({ value, handleChange, handleEnter, dark }) => {
  return (
    <div
      className={`w-full h-auto flex items-center gap-1 p-1 pl-2 pr-3 rounded-sm transition-all duration-300 align-middle`}
    >
      <span className={`w-1 h-4 ${dark ? 'bg-[var(--neu-lgt-gray)]': 'bg-[var(--vdrk-blue)]'} transition-all duration-300 align-middle`} />
      <input
        className={`w-[90%] pl-4 p-2 bg-transparent outline-none 
          ${dark ? 'text-white placeholder-gray-400' : 'text-black placeholder-gray-800'}`}
        type="text"
        placeholder="Create a new todo..."
        value={value}
        onChange={handleChange}
        onKeyDown={handleEnter}
      />
      <hr />
    </div>
  );
};

export default TodoInput;
