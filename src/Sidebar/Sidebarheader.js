import React from "react";
import "./Sidebar.css";
import { DonutLarge } from "@material-ui/icons";
import { Avatar, IconButton } from "@material-ui/core";
import { Chat } from "@material-ui/icons";
import { MoreVert } from "@material-ui/icons";
function Sidebarheader() {
  return (
    <div className="sidebar__header">
      <Avatar src="https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature.jpg" />
      <div className="sidebar__headerRight">
        <IconButton>
          <DonutLarge />
        </IconButton>
        <IconButton>
          <Chat />
        </IconButton>
        <IconButton>
          <MoreVert />
        </IconButton>
      </div>
    </div>
  );
}

export default Sidebarheader;
