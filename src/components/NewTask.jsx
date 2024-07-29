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
    <div className='new-task'>
      <input type="text" placeholder='Type something...' value={enteredTask} onChange={(e) => setEnteredTask(e.target.value)}   />
      <button onClick={handleClick}>Add Task</button>
    </div>
  );
};
