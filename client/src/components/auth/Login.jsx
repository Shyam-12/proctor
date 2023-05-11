import { useNavigate } from "react-router";
import "./login.scss";
import { Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const onSubmit = (e)=>{
    e.preventDefault();
    navigate("/");

  }
  return (
    <div className="login">
      <div className="form">
        <h4>LOGIN</h4>
        <form onSubmit={onSubmit}>
          <label htmlFor="">Username</label>
          <input type="text" placeholder="username"  />
          <label htmlFor="">Password</label>
          <input type="password" name="" id="" placeholder="password" />
          <button>Login</button>
          <p> Dont have an account ? <Link to="/register">Register</Link></p>
        </form>
      </div>
    </div>
  );
};

export default Login;
