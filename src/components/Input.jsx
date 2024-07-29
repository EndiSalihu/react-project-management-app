import { forwardRef } from 'react'
import React from 'react'

const Input = forwardRef(({label, isTextArea, ...props}, ref) => {
  return <p className='inputs'>
    <label>{label}</label>
    {isTextArea 
    ? 
    <textarea ref={ref}  {...props}/> 
    : 
    <input ref={ref}  {...props}/>}
  </p>
})

export default Input