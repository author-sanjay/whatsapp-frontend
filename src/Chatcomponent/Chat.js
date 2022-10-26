import React, { useEffect, useState } from "react";
import "./Chat.css";
import Chatbody from "./Chatbody";
import Chatfooter from "./Chatfooter";
import Chatheader from "./Chatheader";
import Pusher from "pusher-js"
import axios from "../axios.js";

function Chat() {
  const [messages,setMessages]=useState([])
    useEffect(()=>{

      axios.get('/api/messages/sync')
      .then(response=>{
          setMessages(response.data)
        }
      )
    },[])
    useEffect(()=>{
       var pusher = new Pusher('9e3a199104fea69bb83a', {
         cluster: 'ap2'
       });
   
       var channel = pusher.subscribe('messages');
       channel.bind('inserted', function(newMessages) {
        //  alert(JSON.stringify(newMessages));
         setMessages([...messages,newMessages])
       });
  
       return ()=>{
        channel.unbind_all();
        channel.unsubscribe();
       };
    },[messages])

    
  
  return (
    <div className="chat">
      <Chatheader />
      <Chatbody mess={messages} />
      <Chatfooter />
    </div>
  );
}

export default Chat;
