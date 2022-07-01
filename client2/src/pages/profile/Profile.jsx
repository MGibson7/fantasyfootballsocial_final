import "./profile.css"
import Topbar from "../../components/topbar/Topbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Feed from "../../components/feed/Feed"
import Rightbar from "../../components/rightbar/Rightbar"

export default function Profile() {
  const pf = process.env.REACT_APP_PUBLIC_FOLDER
  return (
    <>
    <Topbar/>
    <div className="profile">
    <Sidebar/>
    <div className="profileRight">
        <div className="profileRightTop">
            <div className="profileCover">
            <img className="profileCoverImg" src={`${pf}post/3.jpg`} alt="" />
            <img className="profileUserImg" src={`${pf}person/brady.png`} alt="" />

        </div>
        <div className="profileInfo">
            <h4 className="profileInfoName">Michael Gibson</h4>
            <span className="profileInfoDesc">Christine Michael Rules</span>
        </div>
            

        </div>
        <div className="profileRightBottom">
            <Feed/>
           <Rightbar profile/>

        </div>
   

    </div>
    


    </div>
    
    
    
    
    </>
  )
}
