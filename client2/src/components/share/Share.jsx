import "./share.css"
import {useContext, useRef, useState} from "react";
import {AuthContext} from "../../context/AuthContext"
import axios from "axios";


export default function Share() {

    const{user} = useContext(AuthContext)
    const pf = process.env.REACT_APP_PUBLIC_FOLDER
    const desc = useRef()
    const [file, setFile] = useState(null)

    const submitHandler = async (e) =>{
        e.preventDefault()
        const newPost = {
            userId: user._id,
            desc: desc.current.value
        }
        try{
            await axios.post("/api/posts", newPost)

        }catch(err){

        }
    }



  return (
    <div className="share">
        <div className="shareWrapper">
            <div className="shareTop">
                <img className = "shareProfileImg" src={user.profilePicture ? pf + user.profilePicture : pf + "football.png"} alt="" />
                <input placeholder={"What player do you want to talk about "+user.username +"?"} className="shareInput" ref = {desc}/>
            </div>
            <hr className="shareHr" />
            <form className="shareBottom" onSubmit={submitHandler}>
                <div className="shareOptions">
                    <label  htmlFor = "file" className="shareOption">
                        <img className = "shareMedia" src="/assets/video.webp" alt="" />
                        <span className="shareOptionText">Photo or Video</span>
                        <input style = {{display: "none"}} type="file" id = "file"accept = ".png, .jpeg, .jpg, .webp" onChange={(e) => setFile(e.target.files[0]) } />
                    </label>
                    <div className="shareOption">
                        <img className = "shareMedia" src="/assets/tag.png" alt="" />
                        <span className="shareOptionText">Tag</span>
                    </div>
                    <div className="shareOption">
                        <img className = "shareMedia" src="/assets/location.webp" alt="" />
                        <span className="shareOptionText">Location</span>
                    </div>
                    <div className="shareOption">
                        <img className = "shareMedia" src="/assets/emoji.png" alt="" />
                        <span className="shareOptionText">Feelings</span>
                    </div>
                </div>
                <button className="shareButton" type = "submit">Share</button>

            </form>
        </div>
    </div>
  )
}
