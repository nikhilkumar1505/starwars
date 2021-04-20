import React,{useState} from 'react'

const Styling = ({Data}) => {
    const {img,title,hoverImg}=Data;
    const [isHover,setHover]=useState(false);
    const mouseOver=(e)=>{
        setHover(true)
    }
    const mouseOut=(e)=>{
        setHover(false)
    }
    return (
       <>
            <div className="characters">
                <div className="character">
                    <img onMouseOver={mouseOver} onMouseOut={mouseOut} className="avatar"src={isHover?hoverImg:img} alt="avatar"/>
                    <p className="avatar-title">{title.toUpperCase()}</p>
                </div>
            </div>
         </>
    )
}

export default Styling
