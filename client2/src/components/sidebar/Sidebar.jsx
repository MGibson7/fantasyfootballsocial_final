import "./sidebar.css"
import { Users } from "../../dummyData"
import CloseFriend from "../closeFriend/CloseFriend"

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className = "sidebarListItem">
            <img className="sidebarIcon" src="/assets/rss.jpg" alt="rss feed" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className = "sidebarListItem">
            <img className="sidebarIcon" src="/assets/chat.png" alt="rss feed" />
            <span className="sidebarListItemText">Chat</span>
          </li>
          <li className = "sidebarListItem">
            <img className="sidebarIcon" src="/assets/video.webp" alt="rss feed" />
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className = "sidebarListItem">
            <img className="sidebarIcon" src="/assets/groups.jpeg" alt="rss feed" />
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className = "sidebarListItem">
            <img className="sidebarIcon" src="/assets/question.png" alt="rss feed" />
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className = "sidebarListItem">
            <img className="sidebarIcon" src="/assets/job.png" alt="rss feed" />
            <span className="sidebarListItemText">Jobs</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className = "sidebarHr"></hr>
        <ul className = "sidebarFriendList">
          {Users.map(u=>(
            <CloseFriend key = {u.id} user = {u}/>
          ))}
          
          

        </ul>

      </div>
    </div>
  )
}
