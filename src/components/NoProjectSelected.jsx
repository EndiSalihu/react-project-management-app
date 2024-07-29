import React from 'react'
import noProjectImage from './../assets/no-projects.png';

const NoProjectSelected = ({ onStartAddProject }) => {
  return (
    <div className='mt-24 text-center w-full max-w-md mx-auto'>
      <img src={noProjectImage} alt="an empty task-list" className='w-16 h-16 object-contain mx-auto max-md:w-10 max-md:h-10'/>
      <h2 className='font-bold text-xl text-stone-500 my-4 max-md:text-base'>No Project Selected</h2>
      <p className='text-stone-400 mb-4 max-md:text-sm max-lg:mr-2'>Select a project or get started with a new one</p>
      <p className='mt-8'>
        <button onClick={onStartAddProject}
         className='px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100'>
          Create new project</button>
      </p>
    </div>
  )
}

export default NoProjectSelected
