import React, { Fragment } from 'react';
import AddExercise from './AddExercise';
import Exercises from './Exercises';
import './Exercises.styles.css';

export default function ExercisePage() {
  return (
    <Fragment>
      <div className="container">
        <AddExercise/>
        <Exercises />
      </div>
    </Fragment>
  )
}
