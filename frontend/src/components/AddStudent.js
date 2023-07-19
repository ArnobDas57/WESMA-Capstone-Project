import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import './StudentTable.styles.css'
const STUDENT_INFO_URL = "http://localhost:5000/api/student-info";


export default function AddStudent() {
    const [studentID, setStudentID] = useState('');
    const [studentNum, setStudentNum] = useState('');
    const [studentName, setStudentName] = useState('');
    const [studentProgram, setStudentProgram] = useState('');
    const [studentYear, setStudentYear] = useState('');
    const [hasShopAccess, setHasShopAccess] = useState('');
    const [students, setStudents] = useState([]);
  
    const getIDs = async () => {
        const response = await axios.get(STUDENT_INFO_URL);
        setStudents(response.data);

        setStudentID(response.data.length + 10);
        console.log(studentID);
    }

    const onSubmitForm = async (e) => {
        e.preventDefault();

        try {
            const data = [{"studentID" : studentID, "studentNum" : studentNum, "studentName": studentName, "studentProgram": studentProgram, "studentYear": studentYear, "shopAccess ": hasShopAccess}];
            const headers = { "Content-Type": "application/json" };
            const response = await axios.post(STUDENT_INFO_URL, data, headers);

            window.location = "/";
        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(() => {
        getIDs();
      }, []);
 
    return (
    <div className="add-student-container">
       <form className="add-students" onSubmit={onSubmitForm}>
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
        <div className="add-btn-container">
            <button className="btn-success">Add</button>
        </div>
       </form>
    </div>
  )
}
