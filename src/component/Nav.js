import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Nav.css";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();  

 
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <div className="nav-box">
      <div className="logo">
        <img src="../images/logo.jpg" alt="logo" />
      </div>

      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? "✖" : "☰"}
      </div>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/client-list">Client List</Link></li>
        <li><Link to="/product">Product</Link></li>
        <li><Link to="/contactus">Contact Us</Link></li>
      </ul>

      <button className="desktop-login">Login</button>
    </div>
  );
};

export default Nav;