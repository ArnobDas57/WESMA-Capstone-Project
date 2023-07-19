import React, { Fragment, useState } from "react";
import axios from "axios";
import './Exercises.styles.css';
const EXERCISE_URL = "http://localhost:5000/api/exercises";

export default function EditExercise({ exercise }) {
  const [exerciseID, setExerciseID] = useState(exercise.exerciseid);
  const [exerciseName, setExerciseName] = useState(exercise.exercisename);
  const [exerciseDesc, setExerciseDesc] = useState(exercise.exercisedescription);

  const updateExercise = async (e) => {
    e.preventDefault();

    try {
        const data = [{"exerciseID" : exerciseID, "exerciseName" : exerciseName, "exerciseDescription": exerciseDesc}];
        const headers = { "Content-Type": "application/json" };
        const response = await axios.put(EXERCISE_URL,  data, headers);

        window.location = "/";
    } catch (err) {
        console.error(err.message);
    }
  }

  return (
    <Fragment>
        <div className="edit-exercise">
            <div>
            <h4 className="modal-title">Edit Exercise</h4>
            </div>
            <div className="modal-body">
            <div className="name-container">
                <label htmlFor="Name">Name</label>
                <input
                type="text"
                className="form-control"
                id="Name"
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
                rows="5"
                value={exerciseDesc}
                onChange={e => setExerciseDesc(e.target.value)}
                />
            </div>
            </div>
            <div className="modal-footer">
                <button
                    type="button"
                    className="btn-warning"
                    data-dismiss="modal"
                    onClick={e => updateExercise(e)}
                >
                    Edit
                </button>
            </div>
        </div>
  </Fragment>
  )
}
