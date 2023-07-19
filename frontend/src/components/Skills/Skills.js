import React from 'react'
import {mock_skills} from './SKILLS_MOCK'
import SkillItem from './SkillItem'


import './Skills.styles.css'

export default function Skills() {

  return (
    <div>
      <table >
        <thead>
          <tr >
            <th >Skill Id</th>
            <th >Skill Name</th>
            <th >Skill Description</th>
            <th >Edit</th>
          </tr>
        </thead>
        <tbody >
          {mock_skills.map((row, idx) => (
            <SkillItem row={row} key={idx}/>
          ))}
        </tbody>
    </table>
    </div>
  )
}
