import React, {useState, useEffect} from 'react'
import {mock_skills} from './SKILLS_MOCK'
import { Link, useParams } from 'react-router-dom'


import './Skills.styles.css'

export default function Skills() {
  const [skill, setSkill] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const currentSkill = mock_skills[id-1];
    setSkill(currentSkill);
  }, []);


  return (
    <div>
      <Link to='/skills'>
        <div className='back-btn'>Back</div>
      </Link>
      <h1 className='skill-head'>{skill.skillname}</h1>
      <textarea value={skill.skilldescription} rows="10" cols="100"></textarea>
      <div className='skill-edit-btns'>
        <div className='save-skill'>Save Changes</div>
        <div className='delete-skill'>Delete Skill</div>
      </div>
    </div>
  )
}
