import React, { useState } from 'react';
import './SignIn.styles.css';
import profile from './icon.png';
import { connect } from 'react-redux';
import { loginUser } from '../actions/auth';

function SignIn({ loginUser }) {
  const [errMsg, setErrMsg] = useState('');
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })

  const { username, password } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = e => {
    e.preventDefault();
    loginUser(username, password);
  }

  return (
    <div className='outer'>
        <div className='inner'>
            <div>
                <div className='imgs'>
                    <div className='container-image'>
                        <img src={profile} alt='profile' className='profile'/>
                    </div>
                </div>
                <form onSubmit={e => onSubmit(e)}>
                    <h1 className='login'>Login to WESMA</h1>
                    <div>
                        <input 
                        type='text'
                        name='username'
                        placeholder='Western ID' 
                        className='name' 
                        autoComplete="off"
                        onChange={(e) => onChange(e)}
                        value={username}
                        required
                        />
                    </div>
                    <div className='second-input'>
                        <input 
                        type='password' 
                        name='password'
                        placeholder='Password' 
                        className='name'
                        onChange={(e) => onChange(e)}
                        value={password}
                        required
                        />
                    </div>
                    <div className='login-button'>
                        <button type='submit' className='signin-btn'>Sign In</button>
                    </div>
                    <div>
                        <p className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">
                            {errMsg}
                        </p>
                    </div>
                </form>
                <div>
                    <p className='forgot'>
                    <a href="https://www.registrar.uwo.ca/resources/student_center_access_guide.html">Forgot password?</a> 
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default connect(null, { loginUser })(SignIn);