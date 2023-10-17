import React from "react";
import './Navbar.css';
function Navbar(){
    return(
        <>
        <div className="Navbar">
            <div>
                <img src="https://icons.veryicon.com/png/o/miscellaneous/two-color-webpage-small-icon/home-page-161.png" alt="icon" />
            </div>
            <ul>
            <li>Home</li>
            <li>Category</li>
            <li>Pages</li>
            <li>Contact</li>
            </ul>
        </div>
        </>
    )
}
export default Navbar;