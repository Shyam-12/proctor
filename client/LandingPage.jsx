import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <p className="p-12 my-10 text-3xl text-center">
        {/* Create an exam, share unique code with students and monitor cheating
        attempts in real time from the dashboard. Its that simple! */}
        Proctor online exams to ensure cheating free exams
      </p>
      <div className="px-96 py-80 flex items-center justify-center rounded-lg bg-neutral-200 h-16 w-16">
        <div>
            <p className="p-12 my-10 text-3xl">Create exam, share with students and proctor in real-time</p>
            <Link to="/register">
            <button className="flex w-full justify-center rounded-md bg-blue-600 bg-opacity-33 h-10 px-12 py-6 my-6 text-2xl font-semibold leading-6 text-white shadow-sm hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Register</button>
            </Link>
            <Link to="/login">
            <button className="flex w-full justify-center rounded-md bg-blue-600 bg-opacity-53 h-10 px-12 py-6 my-6 text-2xl font-semibold leading-6 text-white shadow-sm hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    Log in
                  </button>
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
