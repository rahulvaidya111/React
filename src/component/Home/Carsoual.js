import React from "react";


function Carsoual () {
    return(
<>
        <div id="demo" className="carousel slide" data-ride="carousel">

<ul className="carousel-indicators">
    <li data-target="#demo" data-slide-to="0" className="active"></li>
    <li data-target="#demo" data-slide-to="1"></li>
    <li data-target="#demo" data-slide-to="2"></li>
</ul>


<div className="carousel-inner">
    <div className="carousel-item active">
        <img src="https://cdn.shopify.com/s/files/1/0661/7423/files/denim-new-launch-desk_4e5a8cd9-2a2c-4283-b304-af3506fdfdf3.jpg?v=1680253444&width=2000"
            alt="Los Angeles" width="1500" height="500"/>
    </div>
    <div className="carousel-item">
        <img src="https://i.ibb.co/4gmcqX2/HD-wallpaper-monkey-swag2-monkey-swag.jpg" alt="Chicago" width="1500"
            height="500"/>
    </div>
    <div className="carousel-item">
        <img src="https://cdn.shopify.com/s/files/1/0661/7423/files/backpack-small-banners-desktop.jpg?v=1684477283&width=2000"
            alt="New York" width="1500" height="500"/>
    </div>
    <div className="carousel-item">
        <img src="https://cdn.shopify.com/s/files/1/0661/7423/files/caps-desktop-banner-op.jpg?v=1679734819&width=2000"
            alt="New York" width="1500" height="500"/>
    </div>
</div>


<a className="carousel-control-prev" href="#demo" data-slide="prev">
    <span className="carousel-control-prev-icon"></span>
</a>
<a className="carousel-control-next" href="#demo" data-slide="next">
    <span className="carousel-control-next-icon"></span>
</a>
</div>

<div className="container">
<div className="categories">
    <div className="row">
        <div className="col-4">
            <a href="Listingpage.html" target="_blank">
                <img src="https://i.ibb.co/rHKWmxz/new-arrival-category-1.webp" className="img-fluid" width="250" height="auto"/></a>
        </div>
        <div className="col-4">
            <a href="Listingpage.html" target="_blank"><img src="https://i.ibb.co/xYGCTMD/top-sellers-category-1.webp" href="Detailspage.html"
                    className="img-fluid" width="250" height="auto"/></a>
        </div>
        <div className="col-4">
            <a href="Listingpage.html" target="_blank"><img src="https://i.ibb.co/cv2F11M/um-steals-category-1.webp" href="Detailspage.html"
                    className="img-fluid" width="250" height="auto"/></a>
        </div>
    </div>
    </div>
    </div>

        </>
    )
}

export default Carsoual;