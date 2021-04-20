import React from "react"
import Styling from './Styling'
import Data from './Data'
import {Link} from "react-router-dom";
import "../app.css"
function Mapping(){
    return(
      <div className="Mapping">
        {Data.map((val,ind)=>{
          return(
            <Link className="Link" key={ind} to={`/${val.title}`}>
            <Styling key={ind} Data={val}/>
            </Link>
          )
        })}
        
      </div>
    )
  }
  export default Mapping