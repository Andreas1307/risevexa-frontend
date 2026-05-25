import React from "react";
import { Link } from "react-router-dom";
import "../FrontStyling/style.css";

import {
  FaFacebook,
  FaInstagram
} from "react-icons/fa";

import { SiTiktok } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-inner">

        <div className="footer-left">
          <p>© 2026 RiseVexa</p>
          <p className="footer-tag">Built for people who want more</p>
        </div>



        <div className="footer-links">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms-of-service">Terms of Service</Link>
          <Link to="/refund-policy">Refund Policy</Link>
          <a href="mailto:risevexa@gmail.com">Contact</a>
        </div>








      </div>
        <div className="footer-socials">

  <a
    href="https://www.facebook.com/profile.php?id=61590204932274"
    target="_blank"
    rel="noreferrer"
    className="social-icon"
  >
    <FaFacebook />
  </a>

  <a
    href="https://www.instagram.com/rise_vexa/"
    target="_blank"
    rel="noreferrer"
    className="social-icon"
  >
    <FaInstagram />
  </a>

  <a
    href="https://www.tiktok.com/@risevexa7"
    target="_blank"
    rel="noreferrer"
    className="social-icon"
  >
    <SiTiktok />
  </a>

</div>
    </footer>
  );
};

export default Footer;