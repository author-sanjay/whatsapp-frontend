import React from 'react'
import "./Chat.css"
import Chatbody from './Chatbody'
import Chatfooter from './Chatfooter'
import Chatheader from './Chatheader'
function Chat() {
  return (
    <div className='chat'>
        <Chatheader/>
        <Chatbody/>
        <Chatfooter/>
    </div>
  )
}

export default Chat