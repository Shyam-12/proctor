import './landing.css';

import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      <p className='headline'>
        Create an exam, share unique code with students and monitor cheating attempts in real time from the dashboard. Its 
        that simple!
      </p>
      <br />
      <div className='rectangle'>
        <Link to="/register" className='reg-btn'>Register</Link>
        <Link to="/login" className='login-btn'>Log In</Link>
      </div>
    </div>
  );
};

export default LandingPage;