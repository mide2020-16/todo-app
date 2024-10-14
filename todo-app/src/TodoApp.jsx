import React, { useState, useEffect } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import TodoFooter from './TodoFooter';

const TodoApp = ({ dark }) => {
  const [getTodo, setGetTodo] = useState('');
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');

  // Load todos from localStorage on mount
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(savedTodos);
  }, []);

  // Save todos to localStorage when they change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // Handle input change
  const handleChange = (e) => setGetTodo(e.target.value);

  // Add new todo on Enter key press
  const handleEnter = (e) => {
    if (e.key === 'Enter' && getTodo.trim() !== '') {
      const newTodo = { text: getTodo.trim(), selected: false };
      setTodos((prevTodos) => [...prevTodos, newTodo]);
      setGetTodo('');
    }
  };

  // Toggle selection of a todo
  const handleSelection = (index) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo, i) =>
        i === index ? { ...todo, selected: !todo.selected } : todo
      )
    );
  };

  // Handle filtering of todos
  const handleFilter = (type) => setFilter(type);

  // Filter todos based on active filter
  const filteredTodos = todos.filter((todo) =>
    filter === 'active'
      ? !todo.selected
      : filter === 'completed'
      ? todo.selected
      : true
  );

  // Delete completed todos
  const deleteCompleted = () => {
    setTodos((prevTodos) => prevTodos.filter((todo) => !todo.selected));
  };
  return (
    <div
      className={`w-[90%] flex flex-col justify-center items-center gap-5 mb-5 h-auto ${
        dark ? 'text-white' : 'text-black'
      }`}
    >
      <TodoInput
        value={getTodo}
        handleChange={handleChange}
        handleEnter={handleEnter}
        dark={dark}
      />

      <TodoList
        setTodo={setTodos}
        allTodos={todos}
        todos={filteredTodos} 
        handleSelection={handleSelection} 
      />

      <TodoFooter
        todos={todos}
        handleFilter={handleFilter}
        deleteCompleted={deleteCompleted}
        filter={filter}
      />
    </div>
  );
};

export default TodoApp;
