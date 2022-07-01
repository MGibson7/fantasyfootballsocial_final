import "./topbar.css"
import {Link} from "react-router-dom";

export default function Topbar() {
  return (
    <div className = "topbarContainer">
        <div className="topbarLeft">
          <Link to = "/" style={{textDecoration:"none"}}>
          <span className="logo">fantasyfootballsocial</span>
          </Link>
          
        </div>
        <div className="topbarCenter">
          <div className="searchbar">
          <img src="/assets/search.webp" alt="" className="searchIcon" />
            <input placeholder="Search for friends, post or video" className="searchInput" />

          </div>
        </div>
        <div className="topbarRight">
          <div className="topbarLinks">
            <span className="topbarLink">Homepage</span>
            <span className="topbarLink">Timeline</span>
            </div>
            <div className="topbarIcons">
              <div className="topbarIconItem">
              <img src="/assets/person/person.jpg" alt="" className="topbarIconImg" />
                <span className="topbarIconBadge">1</span>

              </div>
              <div className="topbarIconItem">
              <img src="/assets/chat.webp" alt="" className="topbarIconImg" />
                <span className="topbarIconBadge">2</span>

              </div>
              <div className="topbarIconItem">
              <img src="/assets/rednot.webp" alt="" className="topbarIconImg" />
                <span className="topbarIconBadge">1</span>

              </div>
            </div>
            <img src="/assets/person/brady.png" alt="" className="topbarImg" />
        </div>

    </div>
  )
}
