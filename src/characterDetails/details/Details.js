import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import KeyListData from  '../KeyListData'
import './Details.css'

const Details = ({data}) => {
    const {id,selectedChar,index}=useParams();
    const [prsntId,setPrsnId]=useState(id);
    const [selData,setSelData]=useState(data[index])

    const selectedKeyList=KeyListData[prsntId]
    useEffect(()=>{
         setPrsnId(id)
         setSelData(data[index])
    },[id,index])
   
    return (
        <>
            <div className="character-box">
                <div className="title">
                    <h1>{selectedChar}</h1>
                </div>
                <div className="scroll">
                     <div className="character-details">
                    {
                        selectedKeyList.map((keyVal,ind)=>{
                            return(
                            <ul key={ind}>
                                <li className='details-list'>{`${keyVal.toUpperCase()} : ${selData[keyVal]}`}</li>
                            </ul>
                            )
                        })
                    }
                     </div>
                </div>
               
            </div>
        </>
    )
}

export default Details
