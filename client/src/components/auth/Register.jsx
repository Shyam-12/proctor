import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [formData, setformData] = useState({
    username: "",
    email: "",
    password: "",
    rePassword: "",
    userType: false,
  });

  const onChange = (e) => {
    setformData({ ...formData, [e.target.id]: e.target.value });
    console.log(formData);
  };
  return (
    <div>
      <h4>Back to Home</h4>
      <div className="form">
        <h1>Regsiter</h1>
        <form>
          <label htmlFor="">Name</label>
          <input
            type="text"
            placeholder="Enter username"
            value={formData.username}
            id="username"
            onChange={onChange}
          />
          <label htmlFor="">Email</label>
          <input
            type="text"
            placeholder="Email "
            value={formData.email}
            id="email"
          />
          <label htmlFor="">Password</label>
          <input
            type="text "
            placeholder="password"
            value={formData.password}
            id="password"
          />
          <label htmlFor="">Confirm Password</label>
          <input
            type="text"
            placeholder="Confirm password"
            id="rePassword"
            value={formData.rePassword}
          />
          <label htmlFor="">Are You Instructor ? </label>
          <input type="checkbox" />
          <p>
            Already have an account? <Link to="/login">Login</Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
