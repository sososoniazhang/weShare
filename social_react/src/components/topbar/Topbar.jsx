import React from "react";
import "./topbar.css"

export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">WeShare</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <div className="searchIcon">
            <span class="material-icons">search</span>
          </div>
        
          <input
            placeholder="Search for free food!"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
          <span class="material-icons">face</span>
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
          <span class="material-icons">chat</span>
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
          <span class="material-icons">lightbulb</span>
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img src="/assets/person/1.jpeg" alt="" className="topbarImg"/>
      </div>
    </div>
  );
}

// export default function Topbar() {
//     return (
//         <div className="topbarContainer">
//           <div className="topbarLeft">
//             <span className="logo">WeShare</span>
//           </div>
//           <div className="topbarCenter">
//             <div className="searchbar">
//                 <span class="material-icons">search</span>
//                 <input placeholder="search for friends or food!" className="searchInput" />
//             </div>
//           </div>
//           <div className="topbaRight">
//             <div className="topbarLinks">
//               <span className="topbarLink">Homepage</span>
//               <span className="topbarLink">Timeline</span>
//             </div>
//             <div className="topbarIcons">
//               <div className="topbarIconItem">
//                 <span class="material-icons">face</span>
//                 <span className="topbarIconBadge">1</span>
//               </div>
//               <div className="topbarIconItem">
//                 <span class="material-icons">chat</span>
//                 <span className="topbarIconBadge">2</span>
//               </div>
//               <div className="topbarIconItem">
//                 <span class="material-icons">lightbulb</span>
//                 <span className="topbarIconBadge">1</span>
//               </div>
//               </div>
//               <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
          
//         </div>

//         </div>
//       );
// }