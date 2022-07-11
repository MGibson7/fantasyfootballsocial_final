import {useRef,useContext} from "react";
import "./login.css"
import { loginCall } from "../../apiCalls";
import {AuthContext} from "../../context/AuthContext"
import {Link} from "react-router-dom"

export default function Login() {
  const email = useRef();
  const password = useRef();
  const {user, isFetching, error, dispatch} = useContext(AuthContext);

  const handleClick = (e) =>{
    e.preventDefault();
    loginCall({email: email.current.value, password: password.current.value},dispatch )
  }
  console.log(user)
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">fantasyfootballsocial</h3>
                <span className="loginDesc">Connect with fantasy football fans around the world!</span>
            </div>
            <div className="loginRight" onSubmit={handleClick}>
                <form className="loginBox">
                  <input placeholder="Email" type = "email" required className="loginInput" ref ={email}/>
                  <input placeholder="Password" type = "password" required minLength={6} className = "loginInput" ref ={password} />
                  <button className="loginButton" type = "submit" disabled = {isFetching}>{isFetching ? "Loading": "Log in"}</button>
                  <span className="loginForgot">Forgot Password</span>
                  <Link to = "/register">
                  <button className="loginRegisterButton">{isFetching ? "Loading": "Create a New Account"}</button>
                  </Link>
                  
                    
                </form>
            </div>
        </div>

    </div>
  )
}
