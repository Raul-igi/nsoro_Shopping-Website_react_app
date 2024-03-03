import React from "react";
import "./Footer.css";
import logo from "../Assets/logo.png";
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'


const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={logo} alt="" style={{width:'100%', height:'40px'}}/>
        <p>NSORO</p>
      </div>
      <ul className="footer-links">
        <li>company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
            <img src={instagram_icon} alt=""/>
        </div>
        <div className="footer-icons-container">
            <img src={pintester_icon} alt=""/>
        </div>

        <div className="footer-icons-container">
            <img src={whatsapp_icon} alt=""/>
        </div>
      </div>
      <div className="footer-copyright">
        <hr/>
        <p>copyright @2024 - All Right Reserved - Nsoro Slash</p>
      </div>
    </div>
  );
};

export default Footer;
