import React, { useEffect, useState } from "react";
import "./Chat.css";

function Chatbody({ mess }) {
  console.log(mess);
  return (
    <div className="chat__body">
        <p className={"chat__message chat__received"}>
          <span className="chat__name">Sajau</span>
          Message
          <span className="chat__timestamp">Time</span>
        </p>

        {mess.map((data) => (
          <p className={`chat__message ${data.received && "chat__reciever"}`}>
            <span className="chat__name">{data.name}</span>
            {data.message}
            <span className="chat__timestamp">{data.timestamp}</span>
          </p>
        ))}
      </div>
  );
}

export default Chatbody;
