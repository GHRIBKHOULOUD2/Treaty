import React from 'react'
import './WelcomePage.css'
import logo from "../../Images/3.png";
import logo6 from '../../Images/13.png';
import { useNavigate } from 'react-router-dom'; 
const WelcomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="welcome-container">
       
       <div className="blue-shape"></div>
       <div className="welcome-content">
       <img src={logo6} alt="" className="first" />
       <img src={logo} onClick={() => navigate("/login")} alt="Treaty Logo" className="logo" />
       <p className="subtitle">
        Your Health, Your Care, <br /> One Platform.
        </p>
        
        <img src={logo6} alt="" className="second" />
          </div>
      <div className="shapes">
       <div className="gray-shape"></div>
       <div className="red-shape"></div>
       </div>

       
    </div>
  )
}

export default WelcomePage


