import React, { useContext } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import {ShopContext} from '../../Context/ShopContext'

const Navbar = () => {

  const [menu,setMenu] = useState("shop");
  const {getTotalCartItems}=useContext(ShopContext);

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" style={{width:'100%', height:'40px'}}/>
        <p>Nsoro</p>
      </div>
      <ul className="nav-menu">
        <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none',color: '#626262' }} to='/'>SHOP</Link> {menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration:'none',color: '#626262'}} to="/mens">MEN</Link> {menu==="mens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration:'none',color: '#626262'}} to="/womens">WOMEN</Link> {menu==="womens"?<hr/>:<></>}</li>
        {/* <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:'none',color: '#626262'}} to="/kids">KIDS</Link> {menu==="shop"?<hr/>:<></>}</li> */}
        <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:'none',color: '#626262' }} to='/Kids'>KIDS</Link> {menu==="kids"?<hr/>:<></>}</li>

      </ul>
      <div className="nav-login-cart">
      <Link to='/login'><button>Login</button></Link>
       <Link to='/cart'><img src={cart_icon} alt="" style={{width:'100%', height:'25px'}}/></Link> 
        <div className="nav-cart-count">{getTotalCartItems ()}</div>
      </div>
    </div>
  );
};

export default Navbar;
