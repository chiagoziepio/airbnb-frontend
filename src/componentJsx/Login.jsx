import React, { useContext, useState } from "react";
import { Context } from "../context";
import { Link, useNavigate } from "react-router-dom";
import "../ComponentCSS/form.css";
import { ReducerTerms } from "../ReducerFile";
import { myApp } from "../context";
import axios from "axios";

const Login = () => {
  const { dispatch, state } = useContext(Context);
const [ username , setUsername] = useState("")
const [password, setPassword]= useState("")
const navigate = useNavigate()
const handleLoginSubmit =  (e)=>{
  e.preventDefault()
  axios.defaults.withCredentials = true;
  const handleLogin = async()=>{
    
    try {
       dispatch({
        type: ReducerTerms.LOGIN_START
      })
      const res = await axios.post("http://localhost:4000/api/airbnb/user/login" ,{username,password});
      const data = await res.data.msg;
      dispatch({
        type: ReducerTerms.LOGIN_SUCCESS,
        payload: data
      })
      navigate("/dashboard")
    } catch (error) {
      console.log(error);
      dispatch({
        type:ReducerTerms.LOGIN_ERROR,
        payload: error.response.data.msg
      })
    }
  }
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
