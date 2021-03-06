import "./topbar.css"
import {Link} from "react-router-dom";
import { useContext } from "react";
import {AuthContext} from "../../context/AuthContext"

export default function Topbar() {
  const {user} = useContext(AuthContext)
  const rf = process.env.REACT_APP_PUBLIC_FOLDER
  return (
    <div className = "topbarContainer">
        <div className="topbarLeft">
          <Link to = "/" style={{textDecoration:"none"}}>
          <span className="logo">fantasyfootballsocial</span>
          </Link>
          
        </div>
        <div className="topbarCenter">

        </div>
        <div className="topbarRight">
          <div className="topbarLinks">
            </div>
            <div className="topbarIcons">
              <div className="topbarIconItem">

              </div>
              <div className="topbarIconItem">


              </div>
              <div className="topbarIconItem">


              </div>
            </div>
            <Link to = {`/profile/${user.username}`}>
              <img src={user.profilePicture ? rf+user.profilePicture : rf + "football.png"} alt="" className="topbarImg" />
            </Link>
            
        </div>

    </div>
  )
}
