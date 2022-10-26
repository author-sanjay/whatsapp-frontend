import { Avatar } from '@material-ui/core'
import React from 'react'
import "./Sidebarchat.css"
function Sidebarchats() {
  return (
    <div className='sidebarChats'>
        <Avatar/>
        <div className='sidebarChat__info'>
            <h2>
                Room Name
            </h2>
            <p>
                This is the last message
            </p>
        </div>
    </div>
  )
}

export default Sidebarchats