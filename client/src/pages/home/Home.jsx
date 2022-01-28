import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import Rightbar from "../../components/rightbar/Rightbar";
import Feed from "../../components/feed/Feed";
import "./home.css";
import { useContext } from "react";
import { AuthContext } from "../../components/context/AuthContext";

export default function Home() {
  const user = useContext(AuthContext);
  console.log(user);
    return (
        <>
        <Topbar/>
        <div className="homeContainer">
          <Sidebar/>
          <Feed/>
          <Rightbar/>
        </div>

        
        </>
        
      );
}