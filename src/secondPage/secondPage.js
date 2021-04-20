import React from 'react'
import {useParams} from 'react-router-dom'
import ApiData from './ApiData'
import NavigationBar from './NavigationBar'


function SecondPage()  {
    const {id}=useParams();
    
    return (
        <div className="second-page">
            <NavigationBar/>
            <ApiData id={id}/>
        </div>
    )
}
export default SecondPage
