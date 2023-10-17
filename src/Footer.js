import React from "react";
import './Footer.css';

function Footer(){
    return(
        <>
        <div className="footer">
            <div className="text">
                <h2>Our Services</h2>
                <ul>
                    <li>Shopping App</li>
                    <li>Client Service</li>
                    <li>Web Designing</li>
                </ul>
            </div> 
            <div className="footer-img">
            <img src="https://cambriaschool.com/wp-content/uploads/2023/01/elements-web-design-opt.jpg" alt="nameb" />
            </div>
            <div className="footer-img2">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtQdW7u196FnHVpMNRAHTEb6aXJwLIetA6SmZzZr7fUgmB3738kWk6ACBPk40JwPeMI5U&usqp=CAU" alt="name" />
            </div>
       </div>
        </>
    )
}
export default Footer;