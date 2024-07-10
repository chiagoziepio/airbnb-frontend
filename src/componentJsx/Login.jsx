import React, { useContext } from "react";
import { Context } from "../context";
import { Link } from "react-router-dom";
import "../ComponentCSS/form.css";

const Login = () => {
  const {
    email,
    setEmail,
    username,
    setUsername,
    password,
    setPassword,
    cPassword,
    setCpassword,
    name,
    setName,
    handleLogin
  } = useContext(Context);
const handleLoginSubmit = (e)=>{
  e.preventDefault()
  handleLogin()
}

  return (
    <div className="login">
      <div className="innerwidth formBx">
        <form onSubmit={handleLoginSubmit}>
          <h3>Sign In</h3>

          <div className="input-control">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              placeholder="username"
            />
          </div>

          <div className="input-control">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="password"
            />
          </div>

          <p>
            Dont have an account?{" "}
            <Link to="/register" className="formLink">
              Register
            </Link>
          </p>
          <button type="submit">Sign-in</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
