import React,{useState} from 'react'
import "./Sidebar.css"
// import {Link} from 'react-router-dom'
import {sidebarData} from "./sidebarData.js"

const Sidebar = () => {

  const [showMenu,setShowMenu] = useState(false);

  return (

    <div className = {(showMenu)?"sidebar-container phone":"sidebar-container"}>
      <div className='logo'>
        {/* Replace with actual logo */}
        <div><i class="fa-solid fa-square"></i></div> 
        <h4 className='gap'>Logo</h4>
      </div>

      {/* hamburger */}
      <div className='menu' onClick={()=>{setShowMenu(!showMenu)}}>
        <span > 
          <i className="fa-solid fa-bars"></i>
        </span>
        <div className='gap'>Hide Menu</div>
      </div>

      <ul className='sidebar-list'>
      {
        sidebarData.map((value,key) => {
         
          return <li key = {value.title} className="link">

            <div >{value.icon}</div>
            <div className='gap'>{value.title}</div>

          </li>;
    
        })
      }
      </ul>
      <div className={(showMenu)?"none":"support"}>
        Support
      </div>

      <div className='sidebar-list'>
        <div className='link'>
          <div><i class="fa-solid fa-ticket"></i></div>
          <div className='gap'>Tickets</div>
        </div>
      </div>

    </div>
  )
}

export default Sidebar