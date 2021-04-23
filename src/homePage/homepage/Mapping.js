import React from "react"
import Avatar from './Avatar'
import Data from '../Data'
import {Link} from "react-router-dom";
import "./homePage.css"

function Mapping(){
    return(
      <div className="Mapping">
        {Data.map((val,ind)=>{
          return(
            <Link className="Link" key={ind} to={`/${val.title}`}>
            <Avatar key={ind} Data={val}/>
            </Link>
          )
        })}
        
      </div>
    )
  }
  export default Mapping