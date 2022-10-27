import { InsertEmoticon, Mic } from "@material-ui/icons";
import React, { useState } from "react";
import "./Chat.css";
import axios from "../axios";
function Chatfooter() {
  const [inputmessage, setinputmessage] = useState("");
  const sendMessage = async(e) => {
    e.preventDefault();

    await axios.post("/api/messages/new",{
      message:inputmessage,
      name:"Hello",
      timestamp:"latest",
      received:true,
    })
    setinputmessage("")
  };

  
  return (
    <div className="chat__footer">
      <InsertEmoticon />
      <form>
        <input
          value={inputmessage}
          onChange={(e) => setinputmessage(e.target.value)}
          placeholder="Type a Message"
          type="text"
        />
        
        <button onClick={sendMessage} type="submit">
          Send
        </button>
      </form>
      <Mic />
    </div>
  );
}

export default Chatfooter;
