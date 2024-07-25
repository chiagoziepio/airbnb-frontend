import React, { useContext, useState } from "react";
import { Context } from "../context";
import { Link, useNavigate } from "react-router-dom";
import "../ComponentCSS/form.css";
import { ReducerTerms } from "../ReducerFile";
import { myApp } from "../context";
import axios from "axios";

const Login = () => {
  const { dispatch, state, BASE_URL,handleLogout } = useContext(Context);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    const handleLogin = async () => {
      //axios.defaults.withCredentials = true;
      try {
        dispatch({
          type: ReducerTerms.LOGIN_START,
        });
        const res = await axios.post(
          `${BASE_URL}/api/airbnb/user/login`,
          { username, password },
          { withCredentials: true }
        );
        const data = await res.data.msg;
        dispatch({
          type: ReducerTerms.LOGIN_SUCCESS,
          payload: data,
        });
        alert(data);
        navigate("/dashboard");
      } catch (error) {
        console.log(error);
        dispatch({
          type: ReducerTerms.LOGIN_ERROR,
          payload: error.response.data.msg,
        });
        alert(error.response.data.msg);
      }
    };
    handleLogin();
  };
  return (
    <div className="login">
      <div className="innerwidth formBx">
        {state.user.length ? (
          <div className="logoutBx">
            <p>Cant login another account</p>
            <button className="logout-btn" onClick={handleLogout}>logout</button>
          </div>
        ) : (
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
            <button type="submit">
              {state.loading ? "Logging in..." : "Sign-in"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
