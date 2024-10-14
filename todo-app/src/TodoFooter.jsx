import React from 'react';

const TodoFooter = ({ todos, handleFilter, deleteCompleted, filter }) => {
  const selectedCount = todos.filter(todo => todo.selected).length;
  let activeCount = todos.length - selectedCount
  return (
    <div className='flex justify-between w-full p-2 bg-neu-vlgt-grayish-blue text-neu-drk-grayish-blue'>
      <p>
        {
          filter === 'all' ? `${todos.length} ${todos.length <= 1 ? 'item' : 'items'} left`
            : 
          filter === 'active' ? `${activeCount} ${activeCount <= 1 ? 'item' : 'items'} left` 
            : 
          `${selectedCount} ${activeCount <= 1 ? 'item' : 'items'} completed`
        }
      </p>

      <div className='flex gap-2'>
        <button 
          onClick={() => handleFilter('all')} 
          className={`text-sm ${filter === 'all' ? 'text-[var(--pry-clr-brg-blue)]' : 'hover:text-[var(--pry-clr-brg-blue)]'}`}
        >
          All
        </button>
        <button 
          onClick={() => handleFilter('active')} 
          className={`text-sm ${filter === 'active' ? 'text-[var(--pry-clr-brg-blue)]' : 'hover:text-[var(--pry-clr-brg-blue)]'}`}
        >
          Active
        </button>
        <button 
          onClick={() => handleFilter('completed')} 
          className={`text-sm ${filter === 'completed' ? 'text-[var(--pry-clr-brg-blue)]' : 'hover:text-[var(--pry-clr-brg-blue)]'}`}
        >
          Completed
        </button>
      </div>
      <button 
        onClick={deleteCompleted} 
        className="text-sm hover:text-red-600 transition-all duration-200"
      >
        Clear Completed
      </button>
    </div>
  );
};

export default TodoFooter;
