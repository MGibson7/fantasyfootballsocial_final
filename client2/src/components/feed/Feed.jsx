import Post from "../post/Post"
import Share from "../share/Share"
import "./feed.css"
import { useState, useEffect } from "react"
import axios from "axios"


export default function Feed() {
  const [posts, setPosts] = useState([])
  useEffect(()=>{
    const fetchPosts = async () =>{
      const res = await axios.get("/api/posts/timeline/62bde5fdbdc8147998deb7a9")
      console.log(res)
      
    }
    
    fetchPosts();
  }, [])
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share/>
        {/*Posts.map((p)=>(
          <Post key = {p.id} post = {p}/>

        ))*/}
        
      </div>
    </div>
  )
}

