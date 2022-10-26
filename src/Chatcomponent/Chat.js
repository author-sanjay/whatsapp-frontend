import React from 'react'
import "./Chat.css"
import Chatbody from './Chatbody'
import Chatheader from './Chatheader'
function Chat() {
  return (
    <div className='chat'>
        <Chatheader/>
        <Chatbody/>
        
    </div>
  )
}

export default Chat