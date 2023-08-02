import React from "react";
import {Link} from "react-router-dom";
import './Listing.css';


const Listingitem = ({similarItemData}) => {
  
  return (
    <div className="col-md-10 items">
      {similarItemData?.map((item)=>{
        return(
               <div  id="itembox" className="item" key={item._id}>
               <Link to={`/Details?Item=${item.Item}`}> <img src={item.Item_image} alt={item.Item}/></Link>
                 <div className="item-info">
                   <div className="item-name">{item.Discription}</div>
                   <div className="item-price">{item.Price}</div>
                   <div className="item-rating">
                     <i className="fa fa-star" aria-hidden="true"></i>
                     <i className="fa fa-star" aria-hidden="true"></i>
                     <i className="fa fa-star" aria-hidden="true"></i>
                     <i className="fa fa-star" aria-hidden="true"></i>
                     <i className="fa fa-star-half-o" aria-hidden="true"></i>
               </div>
                 </div>
               </div>
               )

      })}

     
         </div>
    )
}

export default Listingitem;