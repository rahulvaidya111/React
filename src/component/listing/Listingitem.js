import React from "react";
import {Link} from "react-router-dom";
import './Listing.css';




const Listingitem = (props) => {
    const listsimilarItem = ({similarItemData}) => {
      if(similarItemData){
        return similarItemData.map((item) =>{
          return(

            <div className="col-md-9" key={item._id}>
            <div className="item">
            <Link to={`/Detailsitem`}> <img src={item.Item_image} alt={item.Item}/></Link>
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
            </div>

          )
        })
      }
    }

  
    

    return (
        <div id="content">
         
          {listsimilarItem(props)}
        </div>
        
        
    )
}

export default Listingitem;