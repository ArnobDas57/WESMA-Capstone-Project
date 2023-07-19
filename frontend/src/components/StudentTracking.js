import React from 'react'
import './Page.styles.css'
import Dropdown from './Dropdown'
import { useState } from 'react'
import StudentTable from './StudentTable'
import AddStudent from './AddStudent'

export default function StudentTracking() {
  const [selected, setSelected] = useState("Select Student");

  return (
    <div className='student-tracking'>
      <h1>Student Tracking</h1> 
      <Dropdown selected={selected} setSelected={setSelected}/>
      <AddStudent/>
      <StudentTable/>
    </div>
  )
}
