import { useEffect } from "react";
import "./App.css";
import Chat from "./Chatcomponent/Chat";
import Sidebar from "./Sidebar/Sidebar";
import Pusher from "pusher-js"
function App() {
  useEffect(()=>{
     var pusher = new Pusher('9e3a199104fea69bb83a', {
       cluster: 'ap2'
     });
 
     var channel = pusher.subscribe('messages');
     channel.bind('inserted', function(data) {
       alert(JSON.stringify(data));
     });
  },[])
  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />
        <Chat />
      </div>

      
    </div>
  );
}

export default App;
