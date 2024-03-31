import React from "react";
import { Link } from 'react-router-dom';
import './index.css'
import ImageIcon from '../assets/shaw.jpg'
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import DescriptionIcon from '@mui/icons-material/Description';


const Navbar =()=> {
    // const style = {
  
    // }
    
      return (
         <div className="navbar">
          <img className="icon-image" src={ImageIcon} alt="Icon" />
          <ul className="navbar-links ">
          <li className="navbar-links li a">
             <HomeIcon fontSize="10px" />
            <Link to="/">Home</Link>
          </li>
          <li className="navbar-links li a">
             < PersonIcon fontSize="10px"/>
            <Link to="/about">About</Link>
          </li>
          <li className="navbar-links li a">
          < AttachEmailIcon fontSize="10px" />
            <Link to="/contact">Contact</Link>
            </li>
          <li className="navbar-links li a">
          < BusinessCenterIcon  fontSize="10px" />
            <Link to="/project">Project</Link>
          </li>
          <li className="navbar-links li a">
          < DescriptionIcon  fontSize="10px" />
            <Link to="/resume">resume</Link>
            </li>
          <li className="navbar-links li a">
          < DesignServicesIcon  fontSize="10px" />
            <Link to="/service">service</Link>
            </li>
        </ul>
        </div>
      );
    }
    
    export default Navbar;
    