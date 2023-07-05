import { Component } from "react";
import { Link } from 'react-router-dom';

import './common.css';

class Header extends Component {
    


    render()
    {
        return ( 


            <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <a className="navbar-brand mt-2 mt-lg-0" href="/">
            <img
              src={require('./image/2.png')}
              height="100"
              alt="SiteLogo"
              loading="lazy"
            />
          </a>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/db">HOME</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">ABOUT</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">CONTACT</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ordernow">ORDER NOW</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/signin">SIGN IN</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">REGISTER</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin">ADMIN</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/vendor">VENDOR</Link>
            </li>
          </ul>
        </div>
        
       
      </div>
      <div className="input-group" width={"50 px"}>
      <input  type="input" placeholder="Search"   />
      <button type="button" className="btn btn-outline-primary">Search</button>
     &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <h6 className="display-6 text-red ">APNA TIFFIN </h6>
    </div>
    
    </nav>
  
    
        );
    }
}

export default Header