import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { IoPersonOutline } from 'react-icons/io5';
import { MdOutlineMailOutline } from 'react-icons/md';
import { TbLockPassword } from 'react-icons/tb';
import './LoginPage.css';
import logo1 from '../../Images/9.png';
import logo2 from '../../Images/10.png';
import logo3 from '../../Images/8.png';
import logo5 from '../../Images/12.png';
import logo6 from '../../Images/3.png';

const LoginPage = () => {
  const [userRole, setUserRole] = useState("patient");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  /*const [email2, setEmail2] = useState("");
  const [password2, setPassword2] = useState("");
  const [emailError2, setEmailError2] = useState(false);
  const [passwordError2, setPasswordError2] = useState(false);*/
  const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const validateEmail = (email) => {
    const emailPattern = /^([a-zA-Z]{1,2})\.([a-zA-Z]+)@esi-sba\.dz$/;
    return emailPattern.test(email);
  };

  const validateForm = (emailToValidate, passwordToValidate) => {
    const isEmailValid = validateEmail(emailToValidate);
    const isPasswordValid = passwordToValidate.length >= 6;

    return { isEmailValid, isPasswordValid };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { isEmailValid, isPasswordValid } = validateForm(email, password);
    setEmailError(!isEmailValid);
    setPasswordError(!isPasswordValid);

    if (isEmailValid && isPasswordValid) {
      navigate("/admin");
    }
  };

  /* handleSubmitSecondForm = (e) => {
    e.preventDefault();
    const { isEmailValid, isPasswordValid } = validateForm(email2, password2);
    setEmailError2(!isEmailValid);
    setPasswordError2(!isPasswordValid);

    if (isEmailValid && isPasswordValid) {
      navigate("/firstpage");
    }
  };*/

  const imageSize = windowSize.width < 939 ? "20vw" : "20vw"; 
  const fontSize = windowSize.width < 939 ? "3vw" : "1.4vw";
  const fontSize2 = windowSize.width < 939 ? "4vw" : "3vw";

  return (
    <div className="login-container" style={{ height: windowSize.height }}>
      <div className="left-section">
        <div className="image1">
          <img src={logo1} alt="Logo 1" style={{ width: "150px", height: "150px" }} />
        </div> 
        <div className="title1" style={{ fontSize: fontSize2 }}>Your Health, Your Care, One Platform.</div>
        <div className="subtitle1" style={{ fontSize }}>
          <span className='span1'>Treaty </span>
          centralizes all medical services at
          <span className='span2'> ESI-SBA</span>, making it easy to book appointments, 
          conduct consultations, and manage medical records for students, doctors, and staff.
        </div>
        <div className="image2">
          <div className="img1"><img src={logo2} alt="Logo 2" style={{ width: imageSize }} /></div>
          <div className="img2"><img src={logo3} alt="Logo 3" style={{ width: imageSize }} /></div>
        </div>
      </div>
      
      <div className="right-section">
        <h2 className="welcome-text">Welcome back!</h2>
        <p className="login-info-text">Please enter your login information.</p>

        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="userRole" className="form-label">User Role Selection</label>
          <select
            id="userRole"
            className="form-input"
            value={userRole}
            onChange={(e) => setUserRole(e.target.value)}
          >
            <option value="patient">Patient</option>
            <option value="doctor">Doctor</option>
            <option value="other">Other</option>
          </select>

          <label htmlFor="email" className="form-label ">Email Address</label>
          <input
            type="email"
            id="email"
            className={`form-input ${emailError ? "error-input" : ""}`}
            placeholder="a.example@esi-sba.dz"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password" className="form-label">Password</label>
          <div className="password-container">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              className={`form-input ${passwordError ? "error-input" : ""}`}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className="toggle-password" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <a href="#" className="forgot-password">Forgot password?</a>

          <button type="submit" className="submit-button">Login</button>
        </form>
      </div>

      <div className="thirdsection">
        <div className="i">
          <img src={logo6} alt="" className='logo6' />
          <img src={logo5} alt="" />
        </div>
        <div className="ii">Welcome back!</div>
        <div className="iii">Sign in</div>
        <form className="login-formsmallsize" onSubmit={handleSubmit}>
          <label htmlFor="userRole1" className="form-label1">User Role Selection</label>
          <div className="input-container">
            <IoPersonOutline className="input-icon" />
            <select
              id="userRole1"
              className="form-input1"
              value={userRole}
              onChange={(e) => setUserRole(e.target.value)}
            >
              <option value="patient">Patient</option>
              <option value="doctor">Doctor</option>
              <option value="other">Other</option>
            </select>
          </div>

          <label htmlFor="email2" className="form-label1">Email Address</label>
          <div className="input-container">
            <MdOutlineMailOutline className="input-icon" />
            <input
              type="email"
              id="email2"
              className={`form-input1 ${emailError ? "error-input1" : ""}`}
              placeholder="a.example@esi-sba.dz"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <label htmlFor="password2" className="form-label1">Password</label>
          <div className="password-container1">
            <TbLockPassword className="input-icon" />
            <input
              type={showPassword ? "text" : "password"}
              id="password2"
              className={`form-input1 ${passwordError ? "error-input1" : ""}`}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className="toggle-password1" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <a href="#" className="forgot-password1">Forgot password?</a>
        </form>
        <img src={logo5} alt="" className='logo5' />
        <button type="submit" className="submit-button1" onClick={handleSubmit}>Login</button>
      </div>
    </div>
  );
};

export default LoginPage;
