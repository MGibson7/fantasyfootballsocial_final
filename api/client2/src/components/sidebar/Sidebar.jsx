import "./sidebar.css"
import { useState, useEffect } from "react"

export default function Sidebar() {
  const [player, setPlayer] = useState(0)
  const randPlayer = () =>{
    const randNum = Math.floor(Math.random() * 288) + 1;
    setPlayer(randNum)
    
  }
 
 
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarList">
         <img className = "playerImg" src={`images/player/${player}.jpg`} alt="" />

          </div>
         
        <button className="sidebarButton" onClick={randPlayer}>Generate Random Player to Inspire Your Post</button>
        <hr className = "sidebarHr"></hr>
        <img className = "sidebarAd" src="/assets/ad.png" alt="" />
       

      </div>
    </div>
  )
}
