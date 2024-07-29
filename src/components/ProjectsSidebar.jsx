import React from 'react'

const ProjectsSidebar = ({ onStartAddProject, listedProjects, onSelectProject, selectedProjectId }) => {
  return (
    <aside className='w-1/3 px-8 py-16 bg-stone-900 text-stone-50 max-sm:px-4 md:w-72 max-sm:w-32 max-md:w-64 rounded-r-xl'>
      <h2 className='mb-8 font-bold uppercase text-stone-400 max-md:text-[15px]'>Your Projects</h2>
      <div>
        <button onClick={onStartAddProject}
         className='px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100'>
          + Add Project
        </button>
      </div>

      <ul className='mt-10'>
        {listedProjects.map((project) => {
          let cssClasses = 'w-full text-left px-2 py-1 rounded-sm my-1 text-stone-500 hover:text-stone-200 hover:bg-stone-800';
          
           if(project.id === selectedProjectId){
           cssClasses += ' bg-stone-800 text-stone-200'
          } 
          else {
            cssClasses += ' text-stone-400'
          }

      return(
         <li key={project.id} >
          <button onClick={() => onSelectProject(project.id)} className={cssClasses}>{project.title}</button>
        </li> 
        )} )}
      </ul>      
    </aside>
  )
}

export default ProjectsSidebar
