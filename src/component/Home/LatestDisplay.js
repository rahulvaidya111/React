import React from "react";
import {Link} from 'react-router-dom'




const LatestDisplay = (props) => {
    const listproduct =({TodayDealsData}) => {
        if(TodayDealsData){
            return TodayDealsData.map((item) =>{
              return(
        
                
               <div className="col-3 p-0" key={item._id} >
                <Link to="/SimilarItem" key={item.SimilarItem_id}><img className="img-fluid" src={item.Item_image} alt={item.Discription}/>
                <h4>{item.Discription}</h4></Link>
                <div className="rating">
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star-half-o" aria-hidden="true"></i>
                </div>
                <p>{item.Price}</p>
            </div>
        
              )  
            })
        }
    }
    return(
        <div className="row">
            {listproduct(props)}
        </div>
    )
}

export default LatestDisplay;