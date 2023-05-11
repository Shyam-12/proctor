import "./landing.css";

import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="landing">
      <p>
        Create an exam, share unique code with students and monitor cheating
        attempts in real time from the dashboard. Its that simple!
      </p>
      <div className="reactangle">
        <Link to="/register">
          <button>Register</button>
        </Link>
        <Link to="/login">
          <button>Login</button>
        </Link>
      </div>
    </div>
  );
};

// {/* <div className="container">
//         <p className="headline">
//           Create an exam, share unique code with students and monitor cheating
//           attempts in real time from the dashboard. Its that simple!
//         </p>
//         <br />
//         <div className="rectangle">
//           <button className="reg-btn">Register</button>
//           <button className="login-btn">Log In</button>
//           {/* <Link to="/register" className='reg-btn'>Register</Link>
//             <Link to="/login" className='login-btn'>Log In</Link> */}
//         </div>
//       </div> */}

export default LandingPage;
