import React, { useState } from 'react';

export const NewTask = ({ onAdded }) => {
  const [enteredTask, setEnteredTask] = useState('');

  const handleClick = () => {
    if (enteredTask.trim() === '') {
      return;
    }
    onAdded(enteredTask);
    setEnteredTask('');
  };

  return (
    <div className='flex items-center gap-4 max-md:flex-col'>
      <input
        type="text"
        placeholder='Type something...'
        className='w-64 px-2 py-1 rounded-sm bg-stone-300 max-md:w-44 max-sm:w-36'
        value={enteredTask}
        onChange={(e) => setEnteredTask(e.target.value)}
      />
      <button onClick={handleClick} className='text-stone-700 hover:text-stone-950 '>
        Add Task
      </button>
    </div>
  );
};
