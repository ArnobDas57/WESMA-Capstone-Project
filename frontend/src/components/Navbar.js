import React from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import westernImage from './western.png'

import WithPermission from './WithPermission'
import { connect } from 'react-redux';
import { logoutUser } from '../actions/auth';

import './Navbar.styles.css'


const CustomLink = ({ to, children, ...props }) => {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
} 

function Navbar({ auth: { isAuthenticated, isInstructor }, logoutUser }) {
    const instructorLinks = (
        <ul>
            <CustomLink to="/student-tracking">Student Tracking</CustomLink>
            <CustomLink to="/training-sessions">Training Sessions</CustomLink>
            <CustomLink to="/exercises">Exercises</CustomLink>
            <li className='logout-btn' onClick={() => logoutUser()}>Logout</li>
        </ul>
    );
    const studentLinks = (
        <ul>
            <CustomLink to="/student-sessions">Student Access</CustomLink>
            <div className='logout-btn' onClick={() => logoutUser()}>Logout</div>
        </ul>
    );

  return (
    <nav className='nav'>
        <Link to='/' className='site-title'>
            Western Engineering Shop Management Application
            <img src={westernImage} alt="Western Logo" width='90' height='90'/>
        </Link>
        {isAuthenticated && isInstructor && instructorLinks}
        {isAuthenticated && !isInstructor && studentLinks}
    </nav>
  )
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, { logoutUser })(Navbar);
