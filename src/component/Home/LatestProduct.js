import React,{useState,useEffect} from "react";
import './Featureproduct.css';
import LatestDisplay from './LatestDisplay'

const base_url = "https://urbanmonkey.onrender.com/TodayDeals";


const LatestProduct = () => {
    const[TodayDeals,setTodayDeals] = useState();
    useEffect(() => {
        fetch(`${base_url}`,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            setTodayDeals(data)
        })
    },[])
    return(
        <>
        <div className="small-container">
                <h2 className="title">Latest Product</h2>
                <LatestDisplay TodayDealsData={TodayDeals}/>
        
                </div>
                
        </>
    )
}

export default LatestProduct;