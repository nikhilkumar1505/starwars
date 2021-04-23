import React,{useState,useEffect } from 'react'
import axios from 'axios';
import CharacterList from './CharacterList';
import Button from '@material-ui/core/Button';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import "./character.css"

function ApiData({dataCall,id}){
    const [isData,setIsData]=useState([])
    const [prevURL,setPrevURL]=useState("")
    const [newURL,setNewURL]=useState('')
    const [isId,setIsID]=useState()

    useEffect(()=>{ getdata()},[id])
  
    const upDateURL=async(url)=>{
        const res= await axios.get(url)
        setIsData(res.data.results); 
        setPrevURL(res.data.previous);
        setNewURL(res.data.next);
        return(isData);
    }
    
    const getdata= ()=>{
        const apiURL=`http://swapi.dev/api/${id}`
        setIsID(id);
        upDateURL(apiURL)
        
    }
   dataCall(isData);
    return(
        <>
            {
                <CharacterList id={isId}  data={isData}/>    
            }
            <div className="button">
                <div className="button-left">
                    <Button 
                    variant="contained"
                    color="primary"
                    onClick={()=>{upDateURL(prevURL)}}  
                    disabled={!prevURL?true:false} 
                    startIcon={<ArrowBackIosIcon/>}>
                        previous
                    </Button>
                </div>
                <div className="button-right">
                    <Button 
                    variant="contained"
                    color="secondary"
                    onClick={()=>{upDateURL(newURL)}}  
                    disabled={!newURL?true:false} 
                    endIcon={<ArrowForwardIosIcon/>} >
                        next
                    </Button>
                </div>
            </div>
        </>
    )
}
export default ApiData



