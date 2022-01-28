import "./login.css";
import {useContext, useRef} from "react"
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../components/context/AuthContext";
import CircularProgress from '@mui/material/CircularProgress';

export default function Login() {
  const email = useRef();
  const password = useRef();

  const {user, isFetching, error, dispatch} = useContext(AuthContext);
  const handleClick = (e) => {
    e.preventDefault();
    loginCall({email: email.current.value, password: password.current.value}, dispatch);
    console.log(email.current.value)
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
            <button className="loginButton" type="submit">
              {isFetching ? <CircularProgress size="20px" color="inherit"/> : "Log In"}
            </button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              {isFetching ? <CircularProgress size="20px" color="inherit"/> : "Create a New Account"}
              
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
