import "./register.css";
import { useRef } from "react";

export default function Register() {
  const username = useRef();
  const email = useRef();
  const passwordAgain = useRef();
  const password = useRef();

  const handleClick = (e) => {
    e.preventDefault();
    if (password.current.value !== passwordAgain.current.value) {
      password.current.setCustomValidity("Passwords do not match!")
      console.log("not match")
    } else { 
      const user = {
        
      }
    }
  }
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">WeShare</h3>
          <span className="loginDesc">
            Always have the HUNGER to explore.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input 
              placeholder="Username" 
              className="loginInput" 
              ref={username} 
              required/>
            <input 
              placeholder="Email" 
              type="email"
              className="loginInput" 
              ref={email} 
              required/>
            <input 
              placeholder="Password" 
              type = "password"
              className="loginInput" 
              ref={password} 
              required 
              minLength={6}/>
            
            <input 
              placeholder="Password Again" 
              className="loginInput" 
              type = "password"
              ref={passwordAgain} 
              required 
              minLength={6}/>
            <button className="loginButton">Sign Up</button>
            <button className="loginRegisterButton">
              Log into Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
