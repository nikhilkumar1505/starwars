import React,{useState} from 'react'
import {useParams,Route} from 'react-router-dom'
import ApiData from './ApiData'
import NavigationBar from './NavigationBar'
import Details from "../characterDetails/Details"

function SecondPage()  {
    const [rtndata,setRtnData]=useState([])
    const {id}=useParams();
    const returnData=value=>setRtnData(value);

    return (
        <div className="second-page">
            <NavigationBar id={id}/>
            <Route exact path="/:id" > <ApiData dataCall={returnData} id={id}/></Route> 
            <Route  path="/:id/:selectedChar/:index" ><Details data={rtndata} /></Route>
        </div>
    )
}
export default SecondPage
