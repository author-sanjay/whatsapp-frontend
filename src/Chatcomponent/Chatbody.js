import React from 'react'
import "./Chat.css"
function Chatbody() {
  return (
    <div className='chat__body'>
        <p className="chat__message">
            <span className="chat__name">
                Sanjay
            </span>
            This is a message
            <span className='chat__timestamp'>
                {new Date().toUTCString()}
            </span>
        </p>
        <p className="chat__message">
            <span className="chat__name">
                Sanjay
            </span>
            This is a message
            <span className='chat__timestamp'>
                {new Date().toUTCString()}
            </span>
        </p>
        <p className="chat__message">
            <span className="chat__name">
                Sanjay
            </span>
            This is a message
            <span className='chat__timestamp'>
                {new Date().toUTCString()}
            </span>
        </p>
        <p className="chat__message chat__reciever">
            <span className="chat__name">
                Sanjay
            </span>
            This is a message
            <span className='chat__timestamp'>
                {new Date().toUTCString()}
            </span>
        </p>
    </div>
  )
}

export default Chatbody