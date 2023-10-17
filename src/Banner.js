import React from "react";
import './Banner.css';

function Banner(){
    return(
        <>
        <div className="banner">
            <div className="banner-text">
            <h1>
                Welcome to Ecommerce landing page
            </h1>
            <h2>
                This is my landing page,where you can access all the information but its just a landing page.
            </h2>
            </div>
            <div className="banner-img">
            <img src="https://growcify.com/img/growcify-manage-banner.9517debe.png" alt="ecommerce" />
            </div>

        </div>
        </>
    )
}

export default Banner;