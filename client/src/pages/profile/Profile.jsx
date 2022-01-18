import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState([]);
  useEffect(()=>{
    const fetchUsers = async()=>{
      const res = await axios.get(`/users?username=Sonia`)
      setUser(res.data)
    }
    fetchUsers()
    console.log(PF+"person/coverImg1.png");
  }, [])
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              
              <img
                className="profileCoverImg"
                src={PF+user.coverPicture || `${PF}person/coverImg1.png`}
                alt=""
              />
              <img
                className="profileUserImg"
                src={PF+user.profilePicture || PF+"person/noUser.jpeg"}
                alt=""
              />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">{user.username}</h4>
                <span className="profileInfoDesc">{user.description}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed username = {user.username}/>
            <Rightbar profile/>
          </div>
        </div>
      </div>
    </>
  );
}
