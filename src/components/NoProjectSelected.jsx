import React from 'react'
import noProjectImage from './../assets/no-projects.png';

const NoProjectSelected = ({ onStartAddProject }) => {
  return (
    <div id='no-projects-selected'>
      <img src={noProjectImage} alt="an empty task-list"/>
      <h2>No Project Selected</h2>
      <p>Select a project or get started with a new one</p>
      <p>
        <button onClick={onStartAddProject}>
          Create new project</button>
      </p>
    </div>
  )
}

export default NoProjectSelected
