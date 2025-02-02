import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'

const Login = () => {
  const [signState, setSignState] = useState('Sign In')
  return (
    <div className="login">
      <img src={logo} alt="logo" className="login-logo" />
      <div className="login-form">
        <h1>{signState}</h1>
        <form>
          {signState === 'Sign Up' ? (
            <input type="text" placeholder="Your Name" />
          ) : (
            <></>
          )}
          <input type="Email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Sign Up</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" id="re me" />
              <label htmlFor="re me">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {signState === 'Sign In' ? (
            <p>
              New To Netflix? <span onClick={()=>{
                setSignState("Sign Up")
              }}>Sign Up Now</span>
            </p>
          ) : (
            <p>
              Already have Account? <span onClick={()=>{setSignState("Sign In")}}>Sign In Now</span>
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Login
