import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {

  const [isActive, setIsActive] = useState(false);
  return (
    <div className="navbar">
      <div>
        <NavLink className="navbar-logo" to="/refier">
          ReFier
        </NavLink>
      </div>
      <div className="nav-right">
        <NavLink className="navbar-link" to="/contact">
          ContactUs
        </NavLink>

        <NavLink className="navbar-link" to="/market">
          MarketPlace
        </NavLink>
        <NavLink className="navbar-link" to="/">
          Jobs
        </NavLink>
      </div>

      <div className="nav-end">
      <div className='login'>
      <NavLink className="navbar-logIn" to="/login">
      LogIn
    </NavLink>
    </div>
        <div className="dropdown">
          <div className="dropdown-btn" onClick={e => setIsActive(!isActive)}> 
          Register</div>
          {isActive && (
          <div className="dropdown-content">
            <div className="dropdown-item">As a Student</div>
            <div className="dropdown-item">As an Enterprise</div>
          </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
