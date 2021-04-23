import React from 'react'
import { useHistory } from "react-router-dom";
import "./header.css"

const Header = () => {
    const history = useHistory();
   
    return (
            <div className='logo'>
                <button className="logo-button" onClick={()=>history.push("/")}><img  src="images/logo.png" alt="StarWar logo"/> </button>
            </div>
  
    )
}
export default Header
