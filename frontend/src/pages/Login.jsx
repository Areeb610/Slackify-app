import './Login.css';
import logo from '../assets/background.png'
const Login = () => {
  function handleLogin(e) {
    e.preventDefault();
    console.log("Login button clicked!");
    // Write login code here
  }

  return (
    <div className="login-container">
      <div className="left-box">
        <h1 className="app-heading">Slackify</h1>
        <img src={logo} alt='logo' className='logo'></img>
      </div>
      <div className="right-box">
        <h2>Sign In</h2>
        <form>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Email Address" />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" placeholder="Password" />
          <input type="submit" value="Sign In" onClick={handleLogin} className='login-button'/>
          <a href="/forgot-password">Forgot Password?</a>
          <p>
            Dont have an account? <a>Sign Up</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
