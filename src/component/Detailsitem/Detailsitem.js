import React,{useState, useEffect} from 'react';
import './Detailsitem.css'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';

const base_url = "https://urbanmonkey.onrender.com/Detailsitem"


const Detailsitem = () => {

    let [searchParams] = useSearchParams()


    return (
        <>
        <section class="container sproducts my-2 pt-4">
            <div class="col-5">
                <img class="img-fluid" width="100%" height="400px" id="mainImg"
                    src="https://i.ibb.co/DGT8wpq/y2k-hip-hop-jeans-001-11.webp" alt="productimg"/>
                <div class="small-img-group">
                    <div class="d-flex">
                        <img src="https://cdn.shopify.com/s/files/1/0661/7423/products/y2k-hip-hop-jeans-001-9_1024x.jpg?v=1680948909"
                            alt="" class="small-img" width="110px"/>
                        <img src="https://cdn.shopify.com/s/files/1/0661/7423/products/y2k-hip-hop-jeans-001-4_1024x.jpg?v=1680948873"
                            alt="" class="small-img" width="110px"/>
                        <img src="https://cdn.shopify.com/s/files/1/0661/7423/products/y2k-hip-hop-jeans-001-6_1024x.jpg?v=1680253753"
                            alt="" class="small-img" width="110px"/>
                        <img src="https://cdn.shopify.com/s/files/1/0661/7423/products/y2k-hip-hop-jeans-001-27_1024x.jpg?v=1680253753"
                            alt="" class="small-img" width="110px"/>
                    </div>
                </div>
            </div>
            <div class="col-7">
                <h6>Y2K HIP HOP JEANS // 001</h6>
                <div class="quality">                    
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                </div>
                <h3>Unisex jans</h3>
                <h2> Rs-1200 </h2>

                <select class="my-3">
                    <option>Select Size</option>
                    <option>XL</option>
                    <option>XXL</option>
                    <option>MD</option>
                    <option>LG</option>
                </select>
                <input class="inputbox" type="number" value="1"/>
                <button class="buy-btn">Add to cart</button>
                <h4>Core Feature</h4>
                <ul>
                    <li>light blue</li>
                    <li>vintage wash</li>
                    <li>two hand pockets</li>
                    <li>two back pockets</li>
                    <li>fabric: 90% cotton 9% viscose 1% polyester</li>
                    <li>Nisheeta is wearing a size 28/s (height 5.6')</li>
                </ul>
                <div class="span">
                <span>Bringing back The OG denim in the OG fit that dominated ‘90s hip-hop street culture. Everything
                    about these dark light blue denim jeans is oversized.

                    Whether you're rocking them with a graphic tee and sneakers for a casual look or pairing them with
                    heels and a crop top for a night out, these jeans are the ultimate statement piece. Add some serious
                    street style to your wardrobe with these must-have baggy denim jeans. Trust us, you won't want to
                    take them off!

                    Genderless Apparel by Urban Monkey®

                    country of origin: China
                    imported by Venture Innovations, Mumbai, Maharashtra</span></div>
            </div>

    </section>
       </>
            
            

        
    
        
        
        
    )
}



export default Detailsitem;