import "./profile.css"
import Topbar from "../../components/topbar/Topbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Feed from "../../components/feed/Feed"
import Rightbar from "../../components/rightbar/Rightbar"
import { useEffect, useState } from "react"
import { axiosInstance } from "../../config"
import {useParams} from "react-router"

export default function Profile() {
  const pf = process.env.REACT_APP_PUBLIC_FOLDER
  const [user, setUser] = useState({});
  const username = useParams().username;
  

  useEffect(()=>{
    const fetchUser = async () =>{
      const res = await axiosInstance.get(`/api/users?username=${username}`)
      setUser(res.data)
      
    }
    
    fetchUser();
  }, [username])

  return (
    <>
    <Topbar/>
    <div className="profile">
    <div className="profileRight">
        <div className="profileRightTop">
            <div className="profileCover">
            <img className="profileCoverImg" src={user.coverPicture ? pf+user.coverPicture : pf+"field.jpg"} alt="" />
            <img className="profileUserImg" src={user.profilePicture? pf + user.profilePicture : pf + "person/brady.png"} alt="" />

        </div>
        <div className="profileInfo">
            <h4 className="profileInfoName">{user.username}</h4>
            <span className="profileInfoDesc">{user.desc}</span>
        </div>
            

        </div>
        <div className="profileRightBottom">
            <Feed username={username}/>
           <Rightbar user={user}/>

        </div>
   

    </div>
    


    </div>
    
    
    
    
    </>
  )
}
