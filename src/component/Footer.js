import React from "react";
import './Footer.css';



function Footer(){
    return(
        <>
         <footer className="footer container-fluid">
        <div className="d-flex">
            <div className="footer-col">
                <h4>COMPANY</h4>
                <ul>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Our service</a></li>
                    <li><a href="#">privacy policy</a></li>
                    <li><a href="#">affiliate program</a></li>
                </ul>
            </div>
            <div className="footer-col">
                <h4>Get help</h4>
                <ul>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Shippping</a></li>
                    <li><a href="#">Return</a></li>
                    <li><a href="#">order status</a></li>
                    <li><a href="#">payment option</a></li>
                </ul>
            </div>
            <div className="footer-col">
                <h4>Online shop</h4>
                <ul>
                    <li><a href="#">Smart Watch</a></li>
                    <li><a href="#">Googles</a></li>
                    <li><a href="#">T-shirts</a></li>
                    <li><a href="#">Stylesh Hat</a></li>
                </ul>
            </div>
            <div className="footer-col">
                <h4>follow us</h4>
                <div className="social-link">
                    <a href="#"><i className="fa fa-youtube"></i></a>
                    <a href="#"><i className="fa fa-twitter"></i></a>
                    <a href="#"><i className="fa fa-instagram"></i></a>
                    <a href="#"><i className="fa fa-linkedin"></i></a>
                </div>
            </div>
        </div>
    </footer>
        </>
    )
}

export default Footer;