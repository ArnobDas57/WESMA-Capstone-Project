import React from 'react'
import { Link } from 'react-router-dom'

export default function Skills({ row }) {

  return (
    <tr >
      <td>{row.skillid}</td>
      <td>{row.skillname}</td>
      <td>{row.skilldescription}</td>
      <td>
        <Link to={`/skills/${row.skillid}`} className="link">
          <div className="small-btn">Edit</div>
        </Link>
      </td>
    </tr>
  )
}
