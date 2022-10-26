import React from "react";
import "./Sidebar.css";
import Sidebarchats from "./Sidebarchats";

import Sidebarheader from "./Sidebarheader";
import Sidebarsearch from "./Sidebarsearch";
function Sidebar() {
  return (
    <div className="sidebar">
      <Sidebarheader/>
      <Sidebarsearch/>
      <div className="sidebar__chats">
        <Sidebarchats/>
        <Sidebarchats/>
        <Sidebarchats/>
        <Sidebarchats/>
      </div>
    </div>
  );
}

export default Sidebar;
