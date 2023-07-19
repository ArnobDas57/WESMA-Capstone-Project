import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import './Exercises.styles.css';
const EXERCISE_URL = "http://localhost:5000/api/trainingSessions";

export default function AddExercise() {
    const [exerciseName, setExerciseName] = useState('');
    const [exerciseDesc, setExerciseDesc] = useState('');
    const [exercises, setExercises] = useState([]);
    const [exerciseID, setExerciseID] = useState('');
    
    const getIDs = async () => {
        const response = await axios.get(EXERCISE_URL);
        setExercises(response.data);

        setExerciseID(response.data.length + 10);
        console.log(exerciseID);
    }

    const onSubmitForm = async () => {
        e.preventDefault();

        try {
            const data = [{"exerciseID" : exerciseID, "exerciseName" : exerciseName, "exerciseDescription": exerciseDesc}];
            const headers = { "Content-Type": "application/json" };
            const response = await axios.post(EXERCISE_URL, data, headers);

        } catch (err) {
            console.error(err.message)
        }
    }

    useEffect(() => {
        getIDs();
      }, []);
 
    return (
    <Fragment>
       <h1 className="tse">Training Shop Exercises</h1>
       <form className="add" onSubmit={onSubmitForm}>
        <div className="name-container">
            <label htmlFor="Name">Name</label>
            <input
                type="text"
                className="name-input"
                id="name"
                value={exerciseName}
                onChange={e => setExerciseName(e.target.value)}
                />
        </div>
        <div className="desc-container">
                <label htmlFor="Description">Description</label>
                <textarea
                type="text"
                className="desc-input"
                id="Description"
                rows="3"
                value={exerciseDesc}
                onChange={e => setExerciseDesc(e.target.value)}
                />
        </div>
        <div className="add-btn-container">
                <button className="btn-success">Add</button>
        </div>
       </form>
    </Fragment>
  )
}
