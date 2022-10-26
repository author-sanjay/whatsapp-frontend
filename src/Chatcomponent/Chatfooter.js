import { InsertEmoticon, Mic } from '@material-ui/icons'
import React from 'react'
import "./Chat.css"
function Chatfooter() {
  return (
    <div className='chat__footer'>
        <InsertEmoticon/>
        <form>
            <input placeholder="Type a Message" type="text"/>
            <button type="submit">Send</button>
        </form>
        <Mic/>
    </div>
  )
}

export default Chatfooter