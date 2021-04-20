import React from 'react'
import "../app.css"
import { useHistory } from "react-router-dom";

const Header = () => {
    const history = useHistory();
    const redirect=()=>{
    history.push("/")
    }
    return (
        <>
            <div className='logo'>
                <button className="logo-button" onClick={redirect}><img  src="images/logo.png" alt="StarWar logo"/> </button>
            </div>
            <hr className="line1"/> 
        </>
    
        
    )
    
}

export default Header
