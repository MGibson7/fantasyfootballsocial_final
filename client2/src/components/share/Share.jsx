import "./share.css"

export default function Share() {
  return (
    <div className="share">
        <div className="shareWrapper">
            <div className="shareTop">
                <img className = "shareProfileImg" src="/assets/person/brady.png" alt="" />
                <input placeholder="What player do you want to talk about Michael?" className="shareInput" />
            </div>
            <hr className="shareHr" />
            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                        <img className = "shareMedia" src="/assets/video.webp" alt="" />
                        <span className="shareOptionText">Photo or Video</span>
                    </div>
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
                <button className="shareButton">Share</button>

            </div>
        </div>
    </div>
  )
}
