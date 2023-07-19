import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react'
import './Page.styles.css'
import EditExercise from './EditExercise';
import './Exercises.styles.css';
const EXERCISE_URL = "http://localhost:5000/api/exercises";

export default function Exercises() {
  const [exercises, setExercises] = useState([]);
  const [modal, setModal] = useState(false);
  const [exerciseFlag, setExerciseFlag] = useState();

  const getExercises = async () => {
    try {
      const response = await axios.get(EXERCISE_URL);
      setExercises(response.data);
      console.log(exercises);
    } catch (err) {
      console.error(err.message);      
    }
  }

  const deleteExercise = async (id) => {
    try {
      const data = [{"exerciseID": id}];
      const headers = { "Content-Type": "application/json" };
      
      const response = await axios.delete(EXERCISE_URL, {headers, data});
      setExercises(exercises.filter(ex => ex.exerciseid !== id));
    } catch (err) {
      console.error(err.message);      
    }
  }

  const toggleModal = (id) => {
    setExerciseFlag(id);
    setModal(!modal);
  }

  useEffect(() => {
    getExercises();
  }, []);

  return (
    <Fragment>
    {" "}
    <table className="exercise-table">
      <thead>
        <tr>
          <th>Exerice ID #</th>
          <th>Exercise Name</th>
          <th>Description</th>
          <th>Modify</th>
        </tr>
      </thead>
      <tbody>
        {exercises.map(ex => (
          <tr key={ex.exerciseid}>
            <td>{ex.exerciseid}</td>  
            <td>{ex.exercisename}</td>
            <td>{ex.exercisedescription}</td>
            <td>
              <button onClick={() => toggleModal(ex.exerciseid)} className="btn-modal">Edit</button>            
              <button
                className="btn-danger"
                onClick={() => deleteExercise(ex.exerciseid)}
              >
                Delete
              </button>
            </td>
            {(modal && exerciseFlag === ex.exerciseid) && (
               <div className="modal" id={ex.exerciseid}>
                  <div onClick={() => toggleModal(ex.exerciseid)} className="overlay">
                    <button className="close-modal" onClick={() => toggleModal(ex.exerciseid)}>
                      &times;
                    </button>
                  </div>
                  <div className="modal-content">
                    <EditExercise exercise={ex}/>
                  </div>
              </div>
            )}
          </tr> 
        ))}
      </tbody>
    </table>
  </Fragment>
)}

