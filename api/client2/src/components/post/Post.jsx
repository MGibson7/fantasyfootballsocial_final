import "./post.css"
import { useState, useEffect, useContext } from "react";
import { axiosInstance } from "../../config";
import {format} from "timeago.js"
import {Link} from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";


export default function Post({post}) {
    const [like, setLike] = useState(post.likes.length)
    const [isLiked, setIsLiked] = useState(false)
    const [user, setUser] = useState({});
    const pf = process.env.REACT_APP_PUBLIC_FOLDER
    const {user:currentUser} = useContext(AuthContext)

    useEffect(() =>{
        setIsLiked(post.likes.includes(currentUser._id))
    }, [currentUser._id, post.likes])

    useEffect(()=>{
        const fetchUser = async () =>{
          const res = await axiosInstance.get(`/api/users?userId=${post.userId}`)
          setUser(res.data)
          
        }
        
        fetchUser();
      }, [post.userId])

    const likeHandler =()=>{
        try{
            axiosInstance.put("/posts/" + post._id + "/like", {userId: currentUser._id})

        }catch(err){

        }
        setLike(isLiked ? like-1 : like+1)
        setIsLiked(!isLiked)
    }
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <Link to= {`profile/${user.username}`}>
                        <img className="postProfileImg" src={user.profilePicture ? pf + user.profilePicture : pf+"/football.png"} alt="" />
                    </Link>
                    
                    <span className="postUsername">{user.username}</span>
                    <span className="postDate"> {format(post.createdAt)}</span>

                </div>
                <div className="postTopRight">
                    <img className="vertRight" src="/assets/morevert.png" alt="" />

                </div>

            </div>
            <div className="postCenter">
                <span className="postText">{post?.desc}</span>
                <img className= "postImg" src={pf+post.img} alt="" />

            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className="likeIcon" src={`${pf}/football.png`} onClick = {likeHandler} alt="" />
                    <img className="likeIcon" src={`${pf}/super.png`} onClick = {likeHandler} alt="" />
                    <span className="postLikeCounter">{like} people like it</span>

                </div>

            </div>
        </div>
    </div>
  )
}
