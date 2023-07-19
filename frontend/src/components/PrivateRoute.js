import React from "react";
import { connect } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = ({ auth: { isAuthenticated, isInstructor, loading }, type }) => {
  const authCheck = isAuthenticated && !loading;
  let auth;

  if(type === 'all') {
    auth = authCheck;
  }

  if(type === 'student') {
    auth = authCheck && !isInstructor;
  }

  if(type === 'instructor') {
    auth = authCheck && isInstructor;
  }

  return auth ? <Outlet /> : <Navigate to="/" />;
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps)(PrivateRoute);