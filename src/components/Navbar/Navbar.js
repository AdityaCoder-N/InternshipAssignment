import React from 'react'
import "./Navbar.css"
import { Link , useLocation} from 'react-router-dom'

const Navbar = () => {

  let location = useLocation();
  
  return (
   
    <nav className="navbar navbar-light ">
        
        <div className='profile'>
            <div>Aditya</div>
            <img src="./images/profile.webp"></img>
        </div>

        <div className="container-fluid" >

           <div className='link-cont'>
                <Link to='/' className={`navbar-brand ${(location.pathname==="/")?"nav-active":""}`} id="projects">MyProjects</Link>

                <Link to='/explore' className={`navbar-brand ${(location.pathname==="/explore")?"nav-active":""}`} id='explore'>Explore</Link>
           </div>
            

            <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
        </div>
    </nav>
   
  )

}

export default Navbar