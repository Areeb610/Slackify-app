import './Login.css';
import logo from '../assets/login_bg.png';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login button clicked!");
    // Write login code here
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="container-1">
      <div className="login-left-box">
        <h1 className='temp'>Slackify</h1>
        <img src={logo} alt='logo' className='login-logo' />
      </div>
      <div className="login-right-box">
        <h2>Sign In</h2>
        <form className="login-form">
          <label htmlFor="email" className="login-label">Email</label>
          <input type="email" id="email" name="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} className="login-input" />
          <label htmlFor="password" className="login-label">Password</label>
          <div className="login-password-field">
            <input type={showPassword ? "text" : "password"} id="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="login-input" />
            <span className="login-password-toggle" onClick={handleShowPassword}>
              {showPassword ? (
                <FontAwesomeIcon icon={faEyeSlash} />
              ) : (
                <FontAwesomeIcon icon={faEye} />
              )}
            </span>
          </div>
          <input type="submit" value="Sign In" onClick={handleLogin} className='button-login' />
          <a href="/forgot-password" className="login-link">Forgot Password?</a>
          <p className="login-paragraph">
            Dont have an account? <a className="login-link">Sign Up</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
