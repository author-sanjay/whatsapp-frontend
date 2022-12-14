import { Avatar, IconButton } from "@material-ui/core";
import { AttachFile, MoreVert, SearchOutlined } from "@material-ui/icons";
import React from "react";
import "./Chat.css";
function Chatheader() {
  return (
    <div className="chat_header">
      <Avatar />
      <div className="chat__headerInfo">
        <h3>Room Name</h3>
        <p>Last Seen</p>
      </div>
      <div className="chat__headerRight">
        <IconButton>
            <SearchOutlined/>
        </IconButton>
        <IconButton>
            <AttachFile/>
        </IconButton>
        <IconButton>
            <MoreVert/>
        </IconButton>
      </div>
    </div>
  );
}

export default Chatheader;
