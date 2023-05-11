import { useState } from "react";
import { Link } from "react-router-dom";
import "./register.scss";
import axios from "axios";

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
  };

  //to check whether login user is instructor or not
  const onToggle = () => {
    setformData((prev) => ({
      ...prev,
      userType: !prev.userType,
    }));
  };

  //submit the form
  const onSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post(
      "http://localhost:8800/api/users/register",
      formData
    );
    console.log(res.data);
  };

  return (
    <div className="regsiter">
      <Link to="/">
        <h4>Back to Home</h4>
      </Link>
      <div className="form">
        <h1>Regsiter</h1>
        <form onSubmit={onSubmit}>
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
            onChange={onChange}
            type="text"
            placeholder="Email "
            value={formData.email}
            id="email"
          />
          <label htmlFor="">Password</label>
          <input
            onChange={onChange}
            type="text "
            placeholder="password"
            value={formData.password}
            id="password"
          />
          <label htmlFor="">Confirm Password</label>
          <input
            onChange={onChange}
            type="text"
            placeholder="Confirm password"
            id="rePassword"
            value={formData.rePassword}
          />
          <div className="check">
            <label htmlFor="">Are You Instructor ? </label>
            <input type="checkbox" onChange={onToggle} id="userType" />
          </div>

          <button>Submit</button>
          <p>
            Already have an account? <Link to="/login">Login</Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
