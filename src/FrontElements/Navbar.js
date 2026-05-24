import React, { useState} from "react";
import { Link } from "react-router-dom";

import { FaBars, FaTimes } from "react-icons/fa";
import "../FrontStyling/style.css";



const Navbar = () => {

  const [active, setActive] = useState(false);

    return (
        <div class="navbar">
        <div class="brand-block">
          <Link to={"/"}>
          <div class="brand-logo">
              <img 
              src={`${process.env.PUBLIC_URL}/img/RiseVexa Logo.png`}
              draggable="false"
              />
          </div>
          </Link>
          
        </div>
  
        <div class="nav-links">
          <a><Link to={"/"}>Home</Link></a>
          <a><Link to={"/how-it-works"}>How It Works</Link></a>
          <a><Link to={"/success-stories"}>Success Stories</Link></a>
          <a><Link to={"/pricing"}>Pricing</Link></a>
          <Link className="getIncRep"  to={"/sign-up"}><button class="nav-cta-button">Get My Income Report</button></Link>
        </div>

        <span className="hamburger-bars" onClick={() => setActive(!active)}> <FaBars /></span>

{
          active && (

        <div class="nav-links hamburger">
          <span className="close-hamburger" onClick={() => setActive(!active)}> <FaTimes /></span>
          <a><Link to={"/"}>Home</Link></a>
          <a><Link to={"/how-it-works"}>How It Works</Link></a>
          <a><Link to={"/success-stories"}>Success Stories</Link></a>
          <a><Link to={"/pricing"}>Pricing</Link></a>
          <Link className="getIncRep"  to={"/sign-up"}><button class="nav-cta-button">Get My Income Report</button></Link>
        </div>
          )
}

      </div>
    )
}

export default Navbar