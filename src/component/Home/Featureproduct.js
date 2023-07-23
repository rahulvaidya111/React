import React,{useState,useEffect} from "react";
import './Featureproduct.css';
import Featuredisplay from './Featuredisplay'

const base_url = "https://urbanmonkey.onrender.com/products";


const Featureproduct = () => {
    const[products,setProduct] = useState();
    useEffect(() => {
        fetch(`${base_url}`,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            setProduct(data)
        })
    },[])
    return(
        <>
        <div className="small-container">
                <h2 className="title">Featured Product</h2>
                <Featuredisplay productsData={products}/>
        
                </div>
                
        </>
    )
}

export default Featureproduct;