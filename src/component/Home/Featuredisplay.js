import React from "react";
import {Link} from 'react-router-dom';
import './Featureproduct.css'




const Featuredisplay = (props) => {
    const listproduct =({productsData}) => {
        if(productsData){
            return productsData.map((item) =>{
              return(
                
               <div className="col-3 p-0" key={item._id} >
               <Link to={`/SimilarItem`}><img className="img-fluid" src={item.Image} alt={item.product_name}/>
                <h4>{item.product_name}</h4>
                <div className="rating">
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star-half-o" aria-hidden="true"></i>
                </div>
                </Link>
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

export default Featuredisplay;