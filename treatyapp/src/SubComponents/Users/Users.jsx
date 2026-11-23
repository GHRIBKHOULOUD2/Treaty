import React, { useState } from 'react';
import './Users.css';
import logo8 from '../../Images/16.png';
import logo9 from '../../Images/15.png';
import logo10 from '../../Images/17.png';
import logo11 from '../../Images/18.png';
import logo12 from '../../Images/19.png';
import { GoDownload } from "react-icons/go";
import { RiDeleteBinLine } from "react-icons/ri";
import { HiUserAdd } from "react-icons/hi";
import { GrFormFilter } from "react-icons/gr";
import { IoIosArrowDown } from "react-icons/io";
import { RiSearchLine } from "react-icons/ri";
import patientData from "../../Informations/Patient.json";
import { IoMdMore } from "react-icons/io";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { IoPersonAddOutline } from "react-icons/io5";
import { TiUserDelete } from "react-icons/ti";


const Users = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadTime, setUploadTime] = useState(null);
  const [isHidden, setIsHidden] = useState(false);
  const [patients, setPatients] = useState(patientData); 
  const [confirmDialog, setConfirmDialog] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null); 
  const [showFormactivate, setShowFormactivate] = useState(false);
  const [hideActivateDeactivate, setHideActivateDeactivate] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(patients.length / itemsPerPage);
  


const handleConfirmDialog = (user) => {
  setSelectedUser(user); 
};
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      const today = new Date();
      const formattedDate = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;
      setUploadTime(formattedDate);
    }
  };

  const handleCreateAccounts = () => {
    setIsHidden(true);
  };
  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };
  
  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleAccountStatusChange = (userId) => {
    setPatients((prevPatients) =>
      prevPatients.map((user) =>
        user.id === userId
          ? { ...user, account_status: user.account_status === "ACTIVE" ? "DEACTIVATED" : "ACTIVE" }
          : user
      )
    );
    setShowFormactivate(false); 
    setSelectedUser(null); 
    setHideActivateDeactivate(false);
  };
  const displayedPatients = patients.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );
  
  return (
    <div className={`userpage ${showFormactivate ? "blur" : ""}`}>
      <div className="adminheader">
        <img src={logo8} alt="" className='img1' />
        <img src={logo9} alt="" className='img2' />
      </div>

      <div className='userpagerest'>
        <p>User Management</p>

        {!selectedFile && (
          <div className='change1'>
            <p>No accounts are currently available.<br /> Please upload an Excel file to add users</p>
            <input 
              type="file" 
              id="fileInput" 
              style={{ display: "none" }} 
              onChange={handleFileChange} 
            />
            <div onClick={() => document.getElementById("fileInput").click()}>
              <img src={logo10} alt="Upload File" style={{ cursor: "pointer" }} />
            </div>
          </div>
        )}

        {selectedFile && !isHidden && (
          <div className='selectedfile'>
            <div className='selectedfile1'>
              <div className='selectedfile11' style={{ height: "8vh", width: "25vw" }}>
                <img src={logo11} alt="" />
                <div className='file-details'>
                  <p className='file-name' title={selectedFile.name}>
                    {selectedFile.name.substring(0, 12)}
                  </p>
                  <p className='file-date'>{uploadTime}</p>
                </div>
                <div className='file-actions'>
                  <GoDownload className='iconuser' />
                  <RiDeleteBinLine className='iconuser' />
                </div>
              </div>
              <button className='selectedfile12' onClick={handleCreateAccounts}>Create All Accounts</button>
            </div>
            <div className='selectedfile2'>
              <img src={logo12} alt="" />
            </div>
          </div>
        )}

        {isHidden && (
          <div className='listpage'>
            <p className='list'>List of all created accounts with detailed information.</p>
            <div className='list1'>




            <div className='filter-bar' style={{
                width: "60vw",
                height: "5vh",
                display: "flex",
                border: "1px solid #D5D5D5",
                borderRadius: "10px",
                overflow: "hidden",
              }}>
                <div style={{ width: "5%", display: "flex", alignItems: "center", justifyContent: "center", borderRight: "1px solid #D5D5D5" }}>
                  <GrFormFilter style={{ width: "6vh", height: "3vh" }} />
                </div>
                <div style={{ width: "10%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 10px", borderRight: "1px solid #D5D5D5" }}>
                  <p className='a'>Gender</p>
                  <IoIosArrowDown style={{ width: "6vh", height: "3vh" }} />
                </div>
                <div style={{ width: "15%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 10px", borderRight: "1px solid #D5D5D5" }}>
                  <p className='a'>Professional Status</p>
                  <IoIosArrowDown style={{ width: "6vh", height: "3vh" }} />
                </div>
                <div style={{ width: "16%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 10px", borderRight: "1px solid #D5D5D5" }}>
                  <p className='a'>Account Status</p>
                  <IoIosArrowDown style={{ width: "6vh", height: "3vh" }} />
                </div>
                <div style={{ width: "25%", display: "flex", alignItems: "center", padding: "0 10px", marginRight: "200px" }}>
                  <RiSearchLine style={{ width: "6vh", height: "3vh", marginRight: "10px" }} />
                  <input type="search" style={{ border: "none", flex: 1 }} placeholder="Search..." />
                </div>
              </div>


              <button className='add-user-btn' style={{ width: "10vw", height: "5vh" }}>
                <HiUserAdd className='add-user-icon' />
                <p className='add-user-paragraph'>Add user</p>
              </button>
            </div>
            
            <div className="p-6">
              <div className="bluesection">
                <div style={{width:"4vw"}}>ID</div>
                <div style={{width:"12vw"}}>REGISTRATION NUMBER</div>
                <div style={{width:"12vw"}}>FULL NAME</div>
                <div style={{width:"8vw"}}>GENDER</div>
                <div style={{width:"10vw"}}>EMAIL</div>
                <div style={{width:"7vw"}}>PROFESSIONAL STATUS</div>
                <div style={{width:"10vw"}}>ACCOUNT STATUS</div>
              </div>

              <div className="patientinfo">
                {displayedPatients.map((user, index) => (
                 <div key={index} className={`onepatientinfo `}>
                    <div className="diffrent" style={{width:"4vw"}}>{user.id}</div>
                    <div style={{width:"12vw"}}>{user.registration_number}</div>
                    <div style={{width:"12vw"}}>{user.full_name}</div>
                    <div style={{width:"8vw"}}>{user.gender}</div>
                    <div style={{width:"10vw"}}>{user.email}</div>
                    <div style={{width:"7vw"}}>{user.professional_status}</div>
                    <div className="account" style={{width:"10vw"}}>
                      <span className={user.account_status === "ACTIVE" ? "green" : "red"}>
                        {user.account_status}
                      </span>
                      <IoMdMore 
                        style={{width:"3vw", height:"3vh", margin:"auto", cursor:"pointer"}} 
                        onClick={() => setSelectedUser(user)} 
                      />
                     
                    </div>
                  </div>
                ))}
              </div>
              <div className="total">
                <p className="totaltext">Total Users: {patients.length}</p>
                <div className="totalicons">
                  <MdArrowBackIos className={`totalicons1 ${currentPage === 0 ? "disabled" : ""}`}
      onClick={prevPage}/>
                  <div className='totalicons3'></div>
                  <MdArrowForwardIos  className={`totalicons2 ${currentPage === totalPages - 1 ? "disabled" : ""}`}  onClick={nextPage}/>
                </div>
              </div>

              {selectedUser && !hideActivateDeactivate && (
  
  <div className={`dialog-${(patients.findIndex(user => user.id === selectedUser.id) + 1) % 5}`}>


    <p>
      {selectedUser.account_status === "ACTIVE" 
        ? <div className='confirmdeactivate' onClick={() => { setShowFormactivate(true); setHideActivateDeactivate(true); }}>
            <TiUserDelete className='houda' />
            <p>Deactivate</p>
          </div>
        : <div className='confirmactivate' onClick={() => { setShowFormactivate(true); setHideActivateDeactivate(true); }}>
            <IoPersonAddOutline className='houda' />
            <p>Activate</p>
          </div>}
    </p>
  </div>
)}

{showFormactivate && selectedUser && (
  <div className="confirm-dialogs">
    <div className={selectedUser.account_status === "ACTIVE" ? "confirmdeactivates" : "confirmactivates"}>
      <p className='khouloud'>{selectedUser.account_status === "ACTIVE" ? "Confirm Account Deactivation" : "Confirm Account Activation"}</p>
      <p className='khouloude'>
        {selectedUser.account_status === "ACTIVE"
          ? "Are you sure you want to deactivate this account? The user will lose access to the system until reactivated."
          : "Are you sure you want to activate this account? The user will regain access to the system."}
      </p>
      <div className="dialog-buttons">
        <button className="cancel-btn"     onClick={() => {
          setShowFormactivate(false);
          setHideActivateDeactivate(false);
          setSelectedUser(null);
        }}>Cancel</button>
        <button className="confirm-btn" onClick={() => handleAccountStatusChange(selectedUser.id)}>
          Confirm
        </button>
      </div>
    </div>
  </div>
)}



            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Users;

