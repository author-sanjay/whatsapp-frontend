import { useEffect, useState } from "react";
import "./App.css";
import Chat from "./Chatcomponent/Chat";
import Sidebar from "./Sidebar/Sidebar";
import Pusher from "pusher-js"
import axios from "./axios.js";

function App() {
 
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
    <div className="app">
      <div className="app__body">
        <Sidebar />
        <Chat mess={messages}/>
      </div>

      
    </div>
  );
}

export default App;
