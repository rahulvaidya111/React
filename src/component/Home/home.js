import React from "react";
import Featureproduct from "./Featureproduct";
import LatestProduct from "./LatestProduct";
import OurCollection from "./OurCollections";
import SportedOn from "./sportedOn";
import Carsousal from "./Carsoual"

function home(){
    return(
        <>
        <Carsousal/>
        <Featureproduct/>
        <LatestProduct/>
        <OurCollection/>
        <SportedOn/>
        
        </>
    )
}

export default home;