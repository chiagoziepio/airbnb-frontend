import React, { useContext } from 'react'
import { Context } from '../context'
import { Link } from 'react-router-dom'
import "../ComponentCSS/form.css"

const Register = () => {
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
    setName
  } = useContext(Context)
  return (
    <div className='register'>
      <div className="innerwidth formBx">
          <form >
            <h3>Registration</h3>
            <div className="input-control">
              <input 
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder='Fullname'
              required
              />
            </div>
            <div className="input-control">
              <input 
              type="text"
              value={username}
              onChange={e => setUsername(e.target.value)}
              required
              placeholder='username'
              />
            </div>
            <div className="input-control">
              <input 
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              placeholder='Email'
              />
            </div>
            
            <div className="input-control">
              <input 
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              placeholder='password'
              />
            </div>
            <div className="input-control">
              <input 
              type="password"
              value={cPassword}
              onChange={e => setCpassword(e.target.value)}
              required
              placeholder='confirm password'
              />
            </div>
            <p>Already have an account? <Link to = "/login" className='formLink'>sign-in</Link></p>
            <button type="submit" >Register</button>
          </form>
      </div>
    </div>
  )
}

export default Register