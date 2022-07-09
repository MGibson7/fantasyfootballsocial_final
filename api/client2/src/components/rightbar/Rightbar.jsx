import "./rightbar.css"

import { useContext, useEffect, useState } from "react"
import { axiosInstance } from "../../config"
import {Link} from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"


export default function Rightbar({user}) {
  const pf = process.env.REACT_APP_PUBLIC_FOLDER
  const [friends, setFriends] = useState([])
  const { user: currentUser, dispatch } = useContext(AuthContext);
  const [followed, setFollowed] = useState(currentUser.followings.includes(user?._id));
  const [users, setUsers] = useState([])



  useEffect(()=>{
    const fetchUsers = async () =>{
      const res = await axiosInstance.get(`/api/users/allUsers/${currentUser._id}`)
      setUsers(res.data)
      
    }
    
    fetchUsers();
  }, [currentUser._id])


  useEffect(() =>{
    const getFriends = async()=>{
      try{
        const friendList = await axiosInstance.get("/api/users/friends/" + user._id)
        setFriends(friendList.data);

      }catch(err){
        console.log(err)

      }
    }
    getFriends()

  }, [user])

  const handleClick = async() =>{
    try{
      if(followed){
        await axiosInstance.put("/api/users/"+user._id+"/unfollow", {userId: currentUser._id})
        dispatch({type:"UNFOLLOW", payload: user._id})
      }else{
        await axiosInstance.put("/api/users/"+user._id+"/follow", {userId: currentUser._id})
        dispatch({type:"FOLLOW", payload: user._id})
      }


    }catch(err){
      console.log(err)
    }
    setFollowed(!followed)
  }
  
  const HomeRightbar = () =>{
   
    return(
      <>
       <h3 className="fans">FIND FANS TO FOLLOW</h3>
       <div className="users">
        {users.map(userPr =>(
          <Link to = {"/profile/"+userPr.username} style = {{textDecoration:"none"}}>

        
        <div className="userSite">
          <img className = "usersImg" src={userPr.profilePicture ? pf +userPr.profilePicture : pf+"football.png"} alt="" />
          <span className="usersName">{userPr.username}</span>
        </div>
        </Link>
        ))}
        
      </div>
       
      </>

    )
   
  }
  const ProfileRightbar = () =>{
    return(
      <>
      {user.username !== currentUser.username && (
        <div className="follow">
          <button className="rightbarFollowButton" onClick = {handleClick}> Follow</button>
          <button className="rightbarFollowButton" onClick = {handleClick}> Unfollow</button>

        </div>
        
        
        
      )}
      <h4 className="rightbarTitle">User Information</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">Favorite Team:</span>
        <span className="rightbarInfoValue">{user.favTeam}</span>

        </div>
        <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">Favorite Player:</span>
        <span className="rightbarInfoValue">{user.favCurrPlayer}</span>

        </div>
        <div className="rightbarInfoItem">
        <span className="rightbarInfoKey">Favorite All Time:</span>
        <span className="rightbarInfoValue">{user.favAllTimePlayer}</span>

        </div>
      </div>
      <h4 className="rightbarTitle">User Friends</h4>
      <div className="rightbarFollowings">
        {friends.map(friend =>(
          <Link to = {"/profile/"+friend.username} style = {{textDecoration:"none"}}>

          

        
        <div className="rightbarFollowing">
          <img className = "rightbarFollowingImg" src={friend.profilePicture ? pf +friend.profilePicture : pf+"football.png"} alt="" />
          <span className="rightbarFollowingName">{friend.username}</span>
        </div>
        </Link>
        ))}
        
      </div>
      
      </>
    )
  }
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {user ? <ProfileRightbar/> : <HomeRightbar/>}
        
      </div>
    </div>
  )
}
