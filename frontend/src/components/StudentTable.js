import React, { Fragment, useMemo, useEffect, useState } from 'react'
import axios from 'axios'
import './StudentTable.styles.css'
import EditStudent from './EditStudent';
const STUDENT_INFO_URL = "http://localhost:5000/api/student-info";

export default function StudentTable() {
  const [data, setData] = useState([]);
  const [modal, setModal] = useState(false);
  const [studentFlag, setStudentFlag] = useState();

  const getRows = async () => {
    try {
        const response = await axios.get(STUDENT_INFO_URL);
        setData(response.data);
        console.log(response.data);
    } catch (err) {
        console.error(err.message);
    }
  }

  const deleteStudent = async (id) => {
    try {
      const data = [{"studentID": id}];
      const headers = { "Content-Type": "application/json" };
      
      const response = await axios.delete(STUDENT_INFO_URL, {headers, data});
      setData(data.filter(d => d.studentid !== id));
    } catch (err) {
        console.error(err.message);      
    }
  }

  const toggleModal = (id) => {
    setStudentFlag(id);
    setModal(!modal);
  }

  useEffect(() => {
    getRows();
  }, []);

  return (
    <Fragment>
    {" "}
    <table className="student-table">
      <thead>
        <tr>
          <th>Student ID</th>
          <th>Student Number</th>
          <th>Name</th>
          <th>Program</th>
          <th>Year</th>
          <th>Has Shop Access?</th>
          <th>Modify</th>
        </tr>
      </thead>
      <tbody>
        {data.map(d => (
          <tr key={d.studentid}>
            <td>{d.studentid}</td>
            <td>{d.studentnumber}</td>
            <td>{d.studentname}</td>
            <td>{d.studentprogram}</td>
            <td>{d.studentyear}</td>
            <td>{String(d.hasshopaccess)}</td>
            <td>
              <button onClick={() => toggleModal(d.studentid)} className="btn-modal">Edit</button>            
              <button
                className="btn-danger"
                onClick={() => deleteStudent(d.studentid)}
              >
                Delete
              </button>
            </td>
            {(modal && studentFlag === d.studentid) && (
               <div className="modal">
                  <div onClick={() => toggleModal(d.studentid)} className="overlay">
                    <button className="close-modal" onClick={() => toggleModal(d.studentid)}>
                      &times;
                    </button>
                  </div>
                  <div className="modal-content">
                   <EditStudent student={d}/>
                  </div>
                </div>
            )}
          </tr> 
        ))}
      </tbody>
    </table>
  </Fragment>
  )
}
