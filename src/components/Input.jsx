import { forwardRef } from 'react'

import React from 'react'
const classes = 'w-full max-lg:w-[90%] p-1 border-stone-500 border-b-2 rounded-md bg-stone-300 text-stone-600 focus:outline-none focus:border-stone-800'

const Input = forwardRef(({label, isTextArea, ...props}, ref) => {
  return <p className='flex flex-col gap-1 my-4'>
    <label className='text-sm font-bold uppercase text-stone-500'>{label}</label>
    {isTextArea 
    ? 
    <textarea ref={ref} className={classes} {...props}/> 
    : 
    <input ref={ref} className={classes} {...props}/>}
  </p>
})

export default Input