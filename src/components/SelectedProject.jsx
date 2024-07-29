import React from "react";
import Tasks from "./Tasks";

const SelectedProject = ({ currentProject , onDelete, onAddTask, onDeleteTask, tasks}) => {

  const formattedDate = new Date(currentProject.dueDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })


  return (
    <div className="w-[35rem] max-xl:w-[30rem] max-sm:w-[12rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-400">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2 max-sm:text-xl">{currentProject.title}</h1>
          <button onClick={onDelete} className="text-stone-600 hover:text-stone-900 max-sm:mr-4">Delete</button>
        </div>

        <p className="mb-4 text-stone-400">{formattedDate}</p>
        <p className="mb-4 text-stone-700 whitespace-pre-wrap">{currentProject.description}</p>
      </header>
      <Tasks onAdded={onAddTask} onDeleted={onDeleteTask} tasks={tasks}/>
    </div>
  );
};

export default SelectedProject;
