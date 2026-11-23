import React, { useState } from 'react';
import './AdminPage.css';
import logo7 from '../../Images/14.png';
import { RiHome4Line } from "react-icons/ri";
import { HiOutlineUsers } from "react-icons/hi2";
import { IoSettingsOutline } from "react-icons/io5";
import { TbLogout2 } from "react-icons/tb";
import Dashboard from '../../SubComponents/Dashboard/Dashboard';
import Users from '../../SubComponents/Users/Users';

const AdminPage = () => {
  const [activeSection, setActiveSection] = useState("dashboard");

  return (
    <div className="admin">
      
      <div className='sidebar'>
        <img src={logo7} alt="Logo" className="logo" style={{ width: "100%", height: "25%" }} />

        <div 
          onClick={() => setActiveSection("dashboard")} 
          className={`sidebar1 ${activeSection === "dashboard" ? "active" : ""}`}
        >
          <RiHome4Line style={{ width: "40%", height: "40%" }}  />
          <div className='gap'>Dashboard</div>
        </div>

        <div 
          onClick={() => setActiveSection("users")} 
          className={`sidebar2 ${activeSection === "users" ? "active" : ""}`}
        >
          <HiOutlineUsers style={{ width: "40%", height: "40%" }}  />
          <div className='gap'>Users</div>
        </div>

        <div className='sidebar3'><hr /></div>

        <div 
          onClick={() => setActiveSection("settings")} 
          className={`sidebar4 ${activeSection === "settings" ? "active" : ""}`}
        >
          <IoSettingsOutline style={{ width: "40%", height: "40%" }}/>
          <div className='gap'>Settings</div>
        </div>

        <div 
          onClick={() => setActiveSection("logout")} 
          className={`sidebar5 ${activeSection === "logout" ? "active" : ""}`}
        >
          <TbLogout2 style={{ width: "40%", height: "40%" }} />
          <div className='gap'>Logout</div>
        </div>
      </div>

      <div className='rest-of-the-page'>
        {activeSection === "dashboard" && <Dashboard/>}
        {activeSection === "users" && <Users/>}
        {activeSection === "settings" && <h1> Settings Page</h1>}
        {activeSection === "logout" && <h1> Logged Out</h1>}
      </div>
    </div>
  );
};

export default AdminPage;
