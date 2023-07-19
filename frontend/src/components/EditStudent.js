import React, { Fragment, useState } from "react";
import axios from "axios";
import './StudentTable.styles.css'
const STUDENT_INFO_URL = "http://localhost:5000/api/student-info";

export default function EditStudent({ student }) {
  const [studentID, setID] = useState(student.studentid);
  const [studentNum, setStudentNum] = useState(student.studentnumber);
  const [studentName, setStudentName] = useState(student.studentname);
  const [studentProgram, setStudentProgram] = useState(student.studentprogram);
  const [studentYear, setStudentYear] = useState(student.studentyear);
  const [hasShopAccess, setHasShopAccess] = useState(student.hasshopaccess);


  const updateStudent = async (e) => {
    e.preventDefault();

    try {
        const data = [{"studentID" : studentID, "studentNum" : studentNum, "studentName": studentName, "studentProgram": studentProgram, "studentYear": studentYear, "shopAccess ": hasShopAccess}];
        const headers = { "Content-Type": "application/json" };
        const response = await axios.put(STUDENT_INFO_URL,  data, headers);
       
        window.location = "/";
    } catch (err) {
        console.error(err.message);
    }
  }
  
  return (
    <Fragment>
        <div className="edit-student">
            <div>
            <h4 className="modal-title">Edit Student Information</h4>
            </div>
            <div className="modal-body">
            <div className="num-container">
                <label htmlFor="Num">Student #</label>
                <input
                type="text"
                className="form-control"
                id="Num"
                value={studentNum}
                onChange={e => setStudentNum(e.target.value)}
                />
            </div>
            <div className="name-container">
                <label htmlFor="Name">Name</label>
                <input
                type="text"
                className="form-control"
                id="Name"
                value={studentName}
                onChange={e => setStudentName(e.target.value)}
                />
            </div>
            <div className="program-container">
                <label htmlFor="Program">Program</label>
                <input
                type="text"
                className="form-control"
                id="Program"
                value={studentProgram}
                onChange={e => setStudentProgram(e.target.value)}
                />
            </div>
            <div className="year-container">
                <label htmlFor="Year">Year</label>
                <input
                type="text"
                className="form-control"
                id="Year"
                value={studentYear}
                onChange={e => setStudentYear(e.target.value)}
                />
            </div>
            <div className="shop-access-container">
                <label htmlFor="HasShopAccess">Has Shop Access?</label>
                <input
                type="text"
                className="form-control"
                id="HasShopAccess"
                value={hasShopAccess}
                onChange={e => setHasShopAccess(e.target.value)}
                />
            </div>
            </div>
            <div className="modal-footer">
                <button
                    type="button"
                    className="btn-warning"
                    data-dismiss="modal"
                    onClick={e => updateStudent(e)}
                >
                    Edit
                </button>
            </div>
        </div>
  </Fragment>
  )
}
