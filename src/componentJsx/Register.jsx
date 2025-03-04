import React, { useContext, useState } from "react";
import { Context } from "../context";
import { Link, useNavigate } from "react-router-dom";
import { ReducerTerms } from "../ReducerFile";
import axios from "axios";
import "../ComponentCSS/form.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCpassword] = useState("");
  const [name, setName] = useState("");
  const { dispatch, state, BASE_URL,handleLogout } = useContext(Context);
  const user = state.user;
  const navigate = useNavigate()
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      dispatch({
        type: ReducerTerms.REGISTER_START,
      });
      if (password !== cPassword)
        throw new Error("both passwords are not the same");
      const res = await axios.post(`${BASE_URL}/api/airbnb/user/register`, {
        email,
        username,
        password,
        name,
      });
      const data = await res.data.msg;
      dispatch({
        type: ReducerTerms.REGISTER_SUCCESS,
        payload: data,
      });
      alert(data)
      navigate("/login")
    } catch (error) {
      console.log(error);
      dispatch({
        type: ReducerTerms.REGISTER_ERROR,
        payload: error.response.data.msg,
      });
      alert(error.response.data.msg)
    }
    setEmail("");
    setCpassword("");
    setName("");
    setPassword("");
    setUsername("");
  };
  return (
    <div className="register">
      <div className="innerwidth formBx">
        {user.length ? (
          <div className="logoutBx">
            <p>An account is logged in on this device</p>
            <button className="logout-btn" onClick={handleLogout}>logout</button>
          </div>
          
        ) : (
          <form on onSubmit={handleRegister}>
            <h3>Registration</h3>
            <div className="input-control">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Fullname"
                required
              />
            </div>
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
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Email"
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
            <div className="input-control">
              <input
                type="password"
                value={cPassword}
                onChange={(e) => setCpassword(e.target.value)}
                required
                placeholder="confirm password"
              />
            </div>
            <p>
              Already have an account?{" "}
              <Link to="/login" className="formLink">
                sign-in
              </Link>
            </p>
            <button type="submit">{state.RU_loading ? "Registering" : "Register"}</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Register;
