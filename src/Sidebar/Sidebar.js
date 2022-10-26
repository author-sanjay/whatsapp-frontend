import React from "react";
import "./Sidebar.css";

import Sidebarheader from "./Sidebarheader";
import Sidebarsearch from "./Sidebarsearch";
function Sidebar() {
  return (
    <div className="sidebar">
      <Sidebarheader/>
      <Sidebarsearch/>
    </div>
  );
}

export default Sidebar;
