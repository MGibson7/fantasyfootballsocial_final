import Post from "../post/Post"
import Share from "../share/Share"
import "./feed.css"
import { useState, useEffect } from "react"
import axios from "axios"


export default function Feed({username}) {
  const [posts, setPosts] = useState([])
  useEffect(()=>{
    const fetchPosts = async () =>{
      const res = username 
      ? await axios.get("/api/posts/profile/"+username)
      : await axios.get("/api/posts/timeline/62bde5fdbdc8147998deb7a9");
      setPosts(res.data)
      
    }
    
    fetchPosts();
  }, [username])
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share/>
        {posts.map((p)=>(
          <Post key = {p._id} post = {p}/>

        ))}
        
      </div>
    </div>
  )
}

