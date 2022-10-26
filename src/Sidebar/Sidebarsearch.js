import { SearchOutlined } from '@material-ui/icons';
import React from 'react'
import "./Sidebar.css";
function Sidebarsearch() {
  return (
    <div className='sidebar_search'>
        <div className='sidebar_searchContainer'>
            <SearchOutlined/>
            <input placeholder='Search or Start New Chat' type="text"/>
        </div>
    </div>
  )
}

export default Sidebarsearch