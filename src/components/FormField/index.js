import React from 'react'

export default function FormField({value, onChange, type, name, label, tag}) {
  if(tag ==="1"){
    return (
      <div>
  
            <label >
              {label}
              <input 
              type={type} 
              name={name} 
              value={value} 
              onChange = {onChange}/>
            </label>
      </div>
    )
  } else if(tag==="2"){
    return (
      <div>
  
            <label >
              {label}
              <textarea 
              type={type} 
              name={name} 
              value={value} 
              onChange = {onChange}/>
            </label>
      </div>
    )
  }
}
  


