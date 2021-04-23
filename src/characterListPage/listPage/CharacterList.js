import React from 'react'
import "./character.css"
import {Link} from  "react-router-dom"

function CharacterList({data,id}){
    
    return(
        <>
        <div className="character">
           {
               data.map((val,index)=>
                   (
                <ul key={index}  className="character-data">
                    <Link className="character-link" to={`${id}/${val.title || val.name}/${index}`}>
                        <li className="character-list"  >
                            {val.title || val.name}
                        </li>
                    </Link>
                </ul>
                   )
               )
           }
        </div>
        </>
    )
        }
export default CharacterList

