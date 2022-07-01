import "./rightbar.css"
import { Users } from "../../dummyData"
import Online from "../online/Online"

export default function Rightbar({user}) {
  const pf = process.env.REACT_APP_PUBLIC_FOLDER
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
        <div className="rightbarFollowing">
          <img className = "rightbarFollowingImg" src={`${pf}/person/brady.png`} alt="" />
          <span className="rightbarFollowingName">John Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img className = "rightbarFollowingImg" src={`${pf}/person/brady.png`}  alt="" />
          <span className="rightbarFollowingName">John Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img className = "rightbarFollowingImg" src={`${pf}/person/brady.png`}  alt="" />
          <span className="rightbarFollowingName">John Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img className = "rightbarFollowingImg" src={`${pf}/person/brady.png`}  alt="" />
          <span className="rightbarFollowingName">John Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img className = "rightbarFollowingImg" src={`${pf}/person/brady.png`}  alt="" />
          <span className="rightbarFollowingName">John Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img className = "rightbarFollowingImg" src={`${pf}/person/brady.png`}  alt="" />
          <span className="rightbarFollowingName">John Carter</span>
        </div>
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
