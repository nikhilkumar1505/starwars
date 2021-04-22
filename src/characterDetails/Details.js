import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import KeyListData from  './KeyListData'
import './characterDetails.css'

const Details = ({data}) => {
    const {id,selectedChar,index}=useParams();
    const [presData,setPresData]=useState(data);
    const [prsntId,setPrsnId]=useState(id);
    console.log(data)
    
    useEffect(()=>{
         setPresData(data)
         setPrsnId(id)
    },[id,index])

    const selData=presData[index]
    const selectedKeyList=KeyListData[prsntId]

    return (
        <div>
            <div className="character-box">
                <div className="title">
                    <h1>{selectedChar}</h1>
                </div>
                <div className="scroll">
                     <div className="character-details">
                    {
                        selectedKeyList.map((val,ind)=>{
                            return(
                            <ul key={ind}>
                                <li className='details-list'>{`${val.toUpperCase()} : ${selData[val]}`}</li>
                            </ul>
                            )
                        })
                    }
                     </div>
                </div>
               
            </div>
        </div>
    )
}

export default Details
