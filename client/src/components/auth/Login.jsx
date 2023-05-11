import { useNavigate } from "react-router";


const Login = () => {
  const navigate = useNavigate();

  const onSubmit = (e)=>{
    e.preventDefault();
    navigate("/");
    

  }
  return (
    <div>
      <h4>Login</h4>
      <div className="form">
        <form onSubmit={onSubmit}>
          <label htmlFor="">Username</label>
          <input type="text" placeholder="username" value="user"/>
          <label htmlFor="">Password</label>
          <input type="text"  id="pass" />
          <button>Log in</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
