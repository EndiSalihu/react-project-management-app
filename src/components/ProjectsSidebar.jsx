import React from 'react'

const ProjectsSidebar = ({ onStartAddProject, listedProjects, onSelectProject }) => {
  return (
    <aside id='sidebar'>
      <h2>Your Projects</h2>
      <div>
        <button onClick={onStartAddProject}>+ Add Project</button>
      </div>

      <ul>
        {listedProjects.map((project) => {return(
         <li key={project.id} >
          <button onClick={() => onSelectProject(project.id)} className='listed-projects'>{project.title}</button>
        </li> 
        )})}
      </ul>      
    </aside>
  )
}

export default ProjectsSidebar
