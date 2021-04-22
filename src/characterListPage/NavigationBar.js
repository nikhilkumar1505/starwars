import React from 'react'
import localData from '../homePage/Data'
import "./character.css"
import {NavLink} from 'react-router-dom'

const NavigationBar = ({id}) => {
    return (
        <>
            <nav className="nav">
                {
                       localData.map((Title,idx)=>{
                        return(
                      <ul key={idx} >
                          <NavLink className="character-link" to= {`/${Title.title}`}>
                              <li className={(id===Title.title)?"nav-list-highlight":"nav-list"}>
                                  {Title.title.toUpperCase()}
                              </li>
                          </NavLink>
                       </ul>
                    )})
                }
            </nav>
        </>)
        }
export default NavigationBar
