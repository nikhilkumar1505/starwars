import React,{useState,useEffect,createContext} from 'react'
import axios from 'axios';
import Loader from './Loader';
import Routing from './Routing';
import Button from '@material-ui/core/Button';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import "./card.css"

function ApiData({id}){
    const [isData,setIsData]=useState([])
    const [isLoading,setIsloading]=useState(true)
    const [prevURL,setPrevURL]=useState("")
    const [newURL,setNewURL]=useState('')

    useEffect(()=>{
        getdata();
        setIsloading(false);
    },[id])
  
    const upDateURL=async(url)=>{
        const res= await axios.get(url)
        setIsData(res.data.results); 
        setPrevURL(res.data.previous);
        setNewURL(res.data.next);
        return(isData);
    }
 
    const getdata= ()=>{
        const apiURL=`http://swapi.dev/api/${id}`
        upDateURL(apiURL)
   }
console.log(isData)
    return(
        <>
            {
            <Routing data={isData}/>
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


