import React, { useState } from 'react'
import './Home.styles.css'
import SignIn from './SignIn';
import About from './About';

export default function Home() {
  const [showSignIn, setShowSignIn] = useState(false); 

  const signIn = () => {
    setShowSignIn(true);
  } 

  return (
    <div>
      <h1>Home</h1>
      <p>
        The intention of WESMA is to significantly reduce the time that requires the shop training instructor to retrieve and handle the students’ record each year. Currently, the shop training instructor needs to export the data from the OWL site from the previous year, then manually make the required changes to update the next year's cycle to maintain accurate information. Given that in 2020 alone, there were around 2,151 undergraduate students who enrolled in the Engineering Faculty, the manual process is way too tedious of a task for a single person. During an interview with the project advisor, it was noted that it can take over 80 hours to manually update student records in the CHUBB card access database which is a separate additional task over and above the management of training records mentioned above. So, WESMA is also aiming to reduce the time to perform that manual process as well. 
      </p>
      <div className='login-container'>
        {showSignIn === false ? (
          <button className='login-btn' onClick={signIn}>
            Click Here to Login to WESMA
          </button>
        ) : (
          <SignIn></SignIn>
        )}
      </div>
      <div className='about'>
         <About></About>
      </div>
    </div>
  )
}
