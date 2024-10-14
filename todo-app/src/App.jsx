import React, { useState, useEffect } from 'react';
import sun from './assets/images/icons/icon-sun.svg';
import moon from './assets/images/icons/icon-moon.svg';
import TodoApp from './TodoApp';

const App = () => {
  const [dark, setDark] = useState(true);

  // Save theme to localStorage on change
  useEffect(() => {
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark]);
  
  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setDark(savedTheme === 'dark');
    }
  }, []);


  const toggleMode = (e) => {
    e.preventDefault();
    setDark(!dark);
  };

  return (
    <div
      className={`${
        dark ? 'bg-[var(--vdrk-dst-blue)]' : 'bg-[var(--neu-vlgt-grayish-blue)]'
      } relative min-h-screen`}
    >
      <div
        className={`w-full h-screen flex flex-col bg-no-repeat justify-center items-center ${
          dark ? 'bg-desktop-dark' : 'bg-desktop-light'
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center w-[70%] h-20 p-6 relative">
          <h2 className="text-4xl tracking-wider text-white font-medium">
            TODO
          </h2>
          <button onClick={toggleMode} className="w-6 h-6">
            <img
              src={dark ? sun : moon}
              alt={`Switch to ${dark ? 'light' : 'dark'} mode`}
            />
          </button>
        </div>

        {/* TodoApp Component */}
        <TodoApp dark={dark} />

        {/* Footer */}
        <footer className={`${dark ? 'bg-[var(--clr-black)]' : 'bg-[var(--clr-bg-white)]'} text-center text-base ${dark ? 'text-white' : 'text-black'} p-4 rounded-lg`}>

          <p>Challenge by <a href="https://www.frontendmentor.io/" target="_blank" rel="noopener noreferrer" className='text-purple-400 font-bold decoration-wavy transition-colors duration-300 hover:decoration-wavy'>Frontend Mentor</a>.</p>
          <p>Coded by <a href="https://x.com/westfiree" className='text-purple-400 font-bold decoration-wavy transition-colors duration-300 hover:decoration-wavy'>Efuwape Ayomide</a>.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;