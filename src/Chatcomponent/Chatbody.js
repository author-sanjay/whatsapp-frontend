import React, { useEffect, useState } from 'react'
import "./Chat.css"

function Chatbody(props) {
    
  return (
    
    <div className='chat__body'>
        
        <p className={"chat__message chat__received"}>
            <span className="chat__name">
                Sajau
            </span>
            Message
            <span className='chat__timestamp'>
                Time
            </span>
        </p>
        <>
        {
            props.mess.map((data)=>{
                console.log(data._id);
                <p className={"chat__message chat__received"}>
                <span className="chat__name">
                    {data.name}
                </span>
                {data.message}
                <span className='chat__timestamp'>
                    {data.timestamp}
                </span>
            </p>
            })
        }
        </>
    </div>
  )
}

export default Chatbody