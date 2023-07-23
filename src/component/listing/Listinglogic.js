import React,{useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';
import './Listing.css';
import Listingitem from './Listingitem'
import axios from 'axios';


const base_url = "https://urbanmonkey.onrender.com/SimilarItem"

const Listinglogic = () => {
    const[similarItem,setSimilarItem] = useState();
    useEffect(() => {
        fetch(`${base_url}`,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            setSimilarItem(data)
        })
    },[])

    return(
    <>

    <div className='row'>
        <div id="mainListing">
            <div id="filter">
            <div className="col-md-3 filter">
        <h3>Filter</h3>
        <p>Customer Rating</p>
        <form action="/action_page.php" className='Rating'>
          <input type="checkbox" id="rating1" name="rating1" value="4 Star & above"/>
          <label for="rating1">4 Star & above</label><br/>
          <input type="checkbox" id="rating2" name="rating2" value="3 Star & above"/>
          <label for="rating2">3 Star & above</label><br/>
          <input type="checkbox" id="rating3" name="rating3" value="2 Star & abovet"/>
          <label for="rating3">2 Star & above</label><br/>
          <input type="checkbox" id="rating4" name="rating4" value="1 Star & abovet"/>
          <label for="rating4">1 Star & above</label><br/><br/>
        </form>
        </div>
            <Listingitem similarItemData ={similarItem} /> 
    
            </div>  
        </div>
    </div>
    
    </>
    )
}

export default Listinglogic;

