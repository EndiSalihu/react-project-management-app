import React from "react";
import Tasks from "./Tasks";

const SelectedProject = ({ currentProject , onDelete, onAddTask, onDeleteTask, tasks}) => {

  const formattedDate = new Date(currentProject.dueDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })


  return (
    <div className="selected-project">
      <header>
        <div>
          <h1>{currentProject.title}</h1>
          <button onClick={onDelete}>Delete</button>
        </div>

        <p className='formatted-date'>{formattedDate}</p>
        <p className='description' >{currentProject.description}</p>
      </header>
      <Tasks onAdded={onAddTask} onDeleted={onDeleteTask} tasks={tasks}/>
    </div>
  );
};

export default SelectedProject;
