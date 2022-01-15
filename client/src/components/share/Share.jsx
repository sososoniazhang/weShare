import "./share.css";

export default function Share() {
  return (
    <div className="share">
      
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src="/assets/person/1.jpeg" alt="" />
          <input
            placeholder="Found any free food event?"
            className="shareInput"
          />
        </div>
        <hr className="shareHr"/>
        <div className="shareBottom">
            <div className="shareOptions">
                <div className="shareOption">
                  <div className="shareIcon">
                    <span class="material-icons">today</span>
                  </div>
                    <span className="shareOptionText">Date/time</span>
                </div>
                
                <div className="shareOption">
                  <div className="shareIcon">
                    <span class="material-icons">place</span>
                  </div>
                    <span className="shareOptionText">Location</span>
                </div>
                <div className="shareOption">
                  <div className="shareIcon">
                    <span class="material-icons">groups</span>
                  </div>
                    <span className="shareOptionText">Organization</span>
                </div>
                <div className="shareOption">
                  <div className="shareIcon">
                    <span class="material-icons">link</span>
                  </div>
                    <span className="shareOptionText">Link</span>
                </div>
            </div>
            <button className="shareButton">Share</button>
        </div> 
      </div>
    </div>
  );
}
