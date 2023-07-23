import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home/home';
import Main from './Main';
import Listinglogic from './listing/Listinglogic';
import Detailsitem from './Detailsitem/Detailsitem';




const Routing = () => {
    return(
        <div>
            <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Main/>}>

                    <Route index element={<Home/>}/>
                    <Route path="home" element={<home/>}/>
                    <Route path="/SimilarItem" element={<Listinglogic/>}/>
                    <Route path="/Detailsitem" element={<Detailsitem/>}/>
                
                    
                    
                </Route>
            </Routes>
            <Footer/>
            </BrowserRouter>
        </div>
    )
}

export default Routing;