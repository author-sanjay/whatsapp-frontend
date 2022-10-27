import React, { useEffect, useState } from "react";
import "./Chat.css";
import Chatbody from "./Chatbody";
import Chatfooter from "./Chatfooter";
import Chatheader from "./Chatheader";

function Chat({ mess }) {
  return (
    <div className="chat">
      <Chatheader />
      <Chatbody mess={mess}/>
      <Chatfooter />
    </div>
  );
}

export default Chat;
