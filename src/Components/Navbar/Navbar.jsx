import { Link } from "react-router-dom";
import "./navstyles.css"
import { useState } from "react";
function Navbar(){
    const [is_authenticated,setStatus]=useState(true)
    return(
        <nav>
            <div className="logo">HOTSTAR</div>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/all-movies">All Movies</Link></li>
                {is_authenticated&&<button onClick={()=>setStatus(false)}>Logout</button>}
                {is_authenticated?<li><Link to="/dashboard">Dashboard</Link></li>: <li><Link to="/register">Register</Link></li>}
              
                
            </ul>
        </nav>
    )
}

export default Navbar;