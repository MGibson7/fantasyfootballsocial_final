import { useRef, useState } from "react";
import "./register.css"
import axios from "axios";
import {useNavigate} from "react-router"
import {Link} from "react-router-dom"

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const favTeam = useRef();
  const favCurrPlayer = useRef();
  const favAllTimePlayer = useRef();

  const history = useNavigate();
  const [file, setFile] = useState(null)


  const handleClick = async (e) =>{
    e.preventDefault();
    const data = new FormData();
    const fileName = Date.now() +file.name
    data.append("name", fileName)
    data.append("file", file)
    if (passwordAgain.current.value !== password.current.value){
      password.current.setCustomValidity("Passwords don't match")
    }else{
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
        profilePicture: `${fileName}`,
        favTeam: favTeam.current.value,
        favCurrPlayer: favCurrPlayer.current.value,
        favAllTimePlayer: favAllTimePlayer.current.value,
      };
    try{
      await axios.post("/api//auth/register", user);
      await axios.post("/api/upload", data)
      history("/login")


    }
    catch(err){
      console.log(err)
    }
  };
    
  }




  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">fantasyfootballsocial</h3>
                <span className="loginDesc">Connect with fantasy football fans around the world!</span>
            </div>
            <div className="loginRight">
                <form className="loginBox" onSubmit={handleClick}>
                <input placeholder="Username" required ref = {username} className="loginInput" />
                  <input placeholder="Email" type = "email" required ref = {email} className="loginInput" />
                  <input placeholder="Password" type = "password" minLength="6" required ref = {password} className="loginInput" />
                  <input placeholder="Password Again" type = "password" required ref = {passwordAgain} className="loginInput" />
                  <input placeholder="favTeam" required ref = {favTeam} className="loginInput" />
                  <input placeholder="favCurrPlayer" required ref = {favCurrPlayer} className="loginInput" />
                  <input placeholder="favAllTimePlayer" required ref = {favAllTimePlayer} className="loginInput" />
                  Profile Picture
                  <input requred placeholder="Profile Picture" type="file" id = "file" accept = ".png, .jpeg, .jpg, .webp" onChange={(e) => setFile(e.target.files[0]) } className = "loginInput" />
                  <button className="loginButton"type = "submit">Sign Up</button>
                  <Link to = "/login">
                  <button className="loginRegisterButton">Log Into Account</button>
                  </Link>
                  
                    
                </form>
            </div>
        </div>

    </div>
  )
}

