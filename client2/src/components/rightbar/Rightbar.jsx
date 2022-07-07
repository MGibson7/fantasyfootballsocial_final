import "./rightbar.css"
import { Users } from "../../dummyData"
import Online from "../online/Online"
import { useContext, useEffect, useState } from "react"
import axios from "axios"
import {Link} from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"


export default function Rightbar({user}) {
  const pf = process.env.REACT_APP_PUBLIC_FOLDER
  const [friends, setFriends] = useState([])
  const { user: currentUser, dispatch } = useContext(AuthContext);
  const [followed, setFollowed] = useState(currentUser.followings.includes(user?.id));



  useEffect(() =>{
    const getFriends = async()=>{
      try{
        const friendList = await axios.get("/api/users/friends/" + user._id)
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
        await axios.put("/api/users/"+user._id+"/unfollow", {userId: currentUser._id})
        dispatch({type:"UNFOLLOW", payload: user._id})
      }else{
        await axios.put("/api/users/"+user._id+"/follow", {userId: currentUser._id})
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
      <div className="birthdayContainer">
          <img className="birthdayImg" src="/assets/birthday.png" alt="" />
          <span className="birthdayText">
            <b>DY</b> and <b>3 other friends</b> have a birthday today
          </span>
        </div>
        <img className = "rightbarAd" src="/assets/ad.png" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map(u=>(
            <Online key = {u.id} user = {u}/>
          ))}
          
        </ul>
      </>

    )
   
  }
  const ProfileRightbar = () =>{
    return(
      <>
      {user.username !== currentUser.username && (
        <button className="rightbarFollowButton" onClick = {handleClick}> {followed ? "Unfollow": "Follow"}</button>
        
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
