import React from 'react';
import '../pages/Category/styles.css'

function FormField({id, label, type, name, placeholder, value, onChange}){
    return(
        <div>
        <label htmlFor={id}>
            
              {label}<br/> 
       
              {type==='textArea' ? <
                  textarea rows='2' 
                  maxLength='70' 
                  id={id} 
                  type={type} 
                  value={value} 
                  name={name} 
                  placeholder={placeholder} 
                  onChange={onChange}
                    ></textarea> 
                    : 
                    <input maxLength='35' 
                id={id}
                type={type}
                value={value}
                name={name}
                placeholder={placeholder}
                onChange={onChange}
              />}
           
        </label>
      </div>
    )
}

export default FormField;