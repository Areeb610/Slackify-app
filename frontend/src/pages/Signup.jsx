import React from 'react';
import { useState } from 'react';
import './Signup.css';
import logo from '../assets/signup_bg.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

function Signup() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  
  // Handling form input
  const submitHandler = async ()=>{
    // checking null fields
    if(!name || !email || !password || !confirmPassword){
      alert('Please fill all fields');
      return;
    }
    if(password!==confirmPassword){
      alert('Password did not match');
      return;
    }
    // Calling api
    try {
      const config ={
        headers:{
        "Content-type":"application/json"
      },
      };
      const {data} = await axios.post(
        "https://api.escuelajs.co/api/v1/auth/login",
        {name, password},
        config
      );
      JSON.stringify(data);
      console.log(data);
      
    } catch (error) {
      
    }

  }
  return (
    <div className="login-container">
      <div className="left-box">
        <h1 className="temp">Sign Up</h1>
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className="right-box">
        <h2>Create Account</h2>
        <form onSubmit={handleSignup}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" placeholder="Username" />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Email" />

          <label htmlFor="password">Password</label>
          <div className="password-field">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
            <FontAwesomeIcon
              icon={showPassword ? faEyeSlash : faEye}
              className="password-toggle"
              onClick={togglePasswordVisibility}
            />
          </div>
          {passwordError && <p className="error">{passwordError}</p>}

          <label htmlFor="confirm-password">Confirm Password</label>
          <div className="password-field">
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              id="confirm-password"
              name="confirm-password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
            <FontAwesomeIcon
              icon={showConfirmPassword ? faEyeSlash : faEye}
              className="password-toggle"
              onClick={toggleConfirmPasswordVisibility}
            />
          </div>
          {confirmPasswordError && <p className="error">{confirmPasswordError}</p>}
          <input type="submit" value="Create Account" />
          <p>Already have an account? <a>Login</a></p>
        </form>
      </div>
    </div>
  );
}

export default Signup;

