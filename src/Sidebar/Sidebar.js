import React from "react";
import "./Sidebar.css";
import { DonutLarge } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import { Chat } from "@material-ui/icons";
import { MoreVert } from "@material-ui/icons";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
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
    </div>
  );
}

export default Sidebar;
