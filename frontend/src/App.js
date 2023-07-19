import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import StudentTracking from './components/StudentTracking';
import TrainingSessions from './components/TrainingSessions';
import ExercisePage from './components/ExercisePage';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Skills from './components/Skills/Skills';
import SkillPage from './components/Skills/SkillPage';
import StudentSessions from './components/StudentSessions';
import About from './components/About';
//import Profile from './components/Profile';

//Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

if(localStorage.token) {
  setAuthToken(localStorage.token)
}
function App() {

  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <>
      <Navbar/>
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Home /> } />
          <Route path="/about" element={<About /> } />

          {/* <Route exact path="/profile" element={<PrivateRoute type={'all'} /> }>
            <Route path="/profile" element={<Profile /> } />
          </Route> */}

          {/* <Route exact path="/student-tracking" element={<PrivateRoute type={'instructor'} /> }>
            <Route exact path="/student-tracking" element={<StudentTracking  /> } />
          </Route> */}

          <Route exact path="/student-tracking" element={<StudentTracking  /> } />


          {/* <Route exact path="/training-sessions" element={<PrivateRoute type={'instructor'} /> }>
            <Route exact path="/training-sessions" element={<TrainingSessions /> } />
          </Route> */}

          <Route exact path="/training-sessions" element={<TrainingSessions /> } />


          {/* <Route exact path="/exercises" element={<PrivateRoute type={'instructor'} /> }>
            <Route exact path="/exercises" element={<ExercisePage /> } /> 
          </Route> */}

          <Route exact path="/exercises" element={<ExercisePage /> } /> 


          {/* <Route exact path="/student-sessions" element={<PrivateRoute type={'student'} /> }>
            <Route path="/student-sessions" element={<StudentSessions /> } /> 
          </Route> */}

          <Route path="/student-sessions" element={<StudentSessions /> } /> 


          {/* <Route exact path="/skills" element={<PrivateRoute type={'instructor'} /> }>
            <Route path="/skills" element={<Skills /> } />
          </Route> */}

          <Route path="/skills" element={<Skills /> } />


          {/* <Route exact path="/skills/:id" element={<PrivateRoute type={'instructor'} /> }>
            <Route path="/skills/:id" element={<SkillPage /> } />
          </Route> */}

          <Route path="/skills/:id" element={<SkillPage /> } />

        </Routes>
      </div>
      </>
    </Provider>
  )
}

export default App;