import { Link } from "react-router-dom";
import "./landing.scss";

const LandingPage = () => {
  return (
    <div className="main">
      <p className="p">Proctor online exams to ensure cheating free exams</p>
      <div className="container">
        <p>Create exam, share with students and proctor in real-time</p>
        <div className="button">
          <Link className="link" to="/register">
            <button className="regis">Register</button>
          </Link>
          <Link className="link" to="/login">
            <button className="log">Login</button>
          </Link>
        </div>
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

// {/* <div className="flex items-center justify-center flex-col">
//       <p className="p-6 mt-12  text-3xl text-center">
//         {/* Create an exam, share unique code with students and monitor cheating
//         attempts in real time from the dashboard. Its that simple! */}
//         Proctor online exams to ensure cheating free exams
//       </p>
//       <p className="text-3xl my-5">
//         Create exam, share with students and proctor in real-time
//       </p>
//       <div className="px-60 py-60  rounded-lg bg-neutral-200 h-14 w-14">
//         <div className="flex items-center justify-center flex-col w-12 h-10 ">
//           <Link to="/register">
//             <button className="flex w-full justify-center rounded-md bg-blue-600 bg-opacity-33 h-10 px-12 py-6 my-6 text-2xl font-semibold leading-6 text-white shadow-sm hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
//               Register
//             </button>
//           </Link>
//           <Link to="/login">
//             <button className="flex w-full justify-center rounded-md bg-blue-600 bg-opacity-53 h-16 px-12 py-6 my-3 text-2xl font-semibold leading-6 text-white shadow-sm hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
//               Log in
//             </button>
//           </Link>
//         </div>
//       </div>
//     </div> */}
