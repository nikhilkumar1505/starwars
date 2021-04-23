import React,{useState} from 'react'
import "./homePage.css"

const Avatar = ({Data}) => {
    const {img,title,hoverImg}=Data;
    const [isHover,setHover]=useState(false);
    const hover=()=>{
        setHover(prevVal=>!prevVal)
    }
   
    return (
       <>
            <div className="characters">
                <div className="character">
                    <img onMouseOver={hover} onMouseOut={hover} className="avatar"src={isHover?hoverImg:img} alt="avatar"/>
                    <p className="avatar-title">{title.toUpperCase()}</p>
                </div>
            </div>
         </>
    )
}

export default Avatar
