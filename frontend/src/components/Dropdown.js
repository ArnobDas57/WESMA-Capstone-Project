import React, { useState } from 'react'
import './Dropdown.styles.css'

export default function Dropdown({selected, setSelected}) {
  const [isActive, setIsActive] = useState(false);
  const temp = ['Student #001', 'Student #002', 'Student #003'];

  return (
    <div className='dropdown'>
        <div className='dropdown-btn' onClick={e => setIsActive(!isActive)}>
            {selected}
        </div>
        {isActive && (
            <div className='dropdown-content'>
                {temp.map((student) => (
                    <div 
                        onClick={e => {
                           setSelected(student);
                           setIsActive(false);
                        }}
                        className='dropdown-item'
                    >
                        {student}
                    </div>    
                ))}    
             </div>
            )}
        </div>
        );
    }
