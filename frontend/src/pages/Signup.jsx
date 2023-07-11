import { useState } from 'react';
import './Signup.css';
import logo from '../assets/signup_bg.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Signup = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  function handleSignup(e) {
    e.preventDefault();

    // Password validation regex pattern
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

    if (!passwordPattern.test(password)) {
      setPasswordError(
        'Password does not meet requirements.'
      );
      return;
    }

    if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match.');
      return;
    }

    // Password and confirm password match, proceed with signup logic
    console.log('Signup button clicked!');
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
    setPasswordError('');
  }

  function handleConfirmPasswordChange(e) {
    setConfirmPassword(e.target.value);
    setConfirmPasswordError('');
  }

  function togglePasswordVisibility() {
    setShowPassword(!showPassword);
  }

  function toggleConfirmPasswordVisibility() {
    setShowConfirmPassword(!showConfirmPassword);
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
};

export default Signup;
