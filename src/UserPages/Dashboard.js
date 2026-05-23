import React, { useState, useEffect } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import "../UserStyling/dashboard.css";
import axios from "axios";
import directory from "../directory.js"


import {
  FaChartLine,
  FaFileAlt,
  FaLifeRing,
  FaBars,
  FaTimes 
} from "react-icons/fa";



const Dashboard = () => {
    const [show, setShow] = useState(false)
    const [user, setUser] = useState(null)
  const navigate = useNavigate();
  const location = useLocation();


  const [collap, setCollap] = useState(false)


  const AuthCheck = async () => {
    try{
        const res = await axios.get(`${directory}/auth-check`, {
            withCredentials: true,
            validateStatus: () => true, 
          });
    
          if (res.status === 200 && res.data.user) {
            setUser(res.data.user);
            //navigate("/dashboard");
          }else {
            navigate("/")
          }
    } catch (e) {
        console.log("An error occure while trying to perform an auth check", e)
    }
  }

  useEffect(() => {
    AuthCheck()
  }, [])

  const logOut = async () => {
    try {
      await axios.post(`${directory}/logout`, {}, { withCredentials: true})
      navigate("/")
    } catch(e) {
      console.log("An error trying to log out", e)
    }
  }


  return (
    <div className="vx-app">

      <aside className="vx-sidebar">

        <div>
          <div className="vx-logo">
            <img 
              src={`${process.env.PUBLIC_URL}/img/RiseVexa Logo.png`}
              draggable="false"
            />
          </div>

          <div className="vx-nav">

            <div 
              className={`vx-nav-item ${location.pathname === "/dashboard" ? "active" : ""}`}
              onClick={() => navigate("/dashboard")}
            >
              <FaChartLine />
              New Analysis
            </div>

            <div 
              className={`vx-nav-item ${location.pathname === "/dashboard/reports" ? "active" : ""}`}
              onClick={() => navigate("/dashboard/reports")}
            >
               <FaFileAlt />
              My Reports
            </div>


            <div 
              className={`vx-nav-item ${location.pathname === "/dashboard/help" ? "active" : ""}`}
              onClick={() => navigate("/dashboard/help")}
            >
              <FaLifeRing />
              Help
            </div>

          </div>
        </div>

        <div className="user-aside">
          <div onClick={() => setShow(!show)} className="img"></div>
          <span onClick={() => setShow(!show)}>
            <h3>{user?.username}</h3>
            <p>Upgrade Your Income</p>
          </span>

        {show && (
           <div className="logout">
            <button onClick={() => logOut()}>LogOut</button>
          </div>  
        )}
         
        </div>

      </aside>
{collap && (
  <aside className="vx-sidebar collap">
<span onClick={() => setCollap(false)} className="closeCollap"><FaTimes /></span>
        <div>
          <div className="vx-logo">
            <img 
              src={`${process.env.PUBLIC_URL}/img/RiseVexa Logo.png`}
              draggable="false"
            />
          </div>

          <div className="vx-nav">

            <div 
              className={`vx-nav-item ${location.pathname === "/dashboard" ? "active" : ""}`}
              onClick={() => {
                navigate("/dashboard")
              setCollap(false)
              }}
            >
              <FaChartLine />
              New Analysis
            </div>

            <div 
              className={`vx-nav-item ${location.pathname === "/dashboard/reports" ? "active" : ""}`}
              onClick={() => {
                navigate("/dashboard/reports")
              setCollap(false)
              }}
            >
               <FaFileAlt />
              My Reports
            </div>


            <div 
              className={`vx-nav-item ${location.pathname === "/dashboard/help" ? "active" : ""}`}
              onClick={() => {
                setCollap(false)
                navigate("/dashboard/help")}
              }
            >
              <FaLifeRing />
              Help
            </div>

          </div>
        </div>

        <div className="user-aside">
          <div onClick={() => setShow(!show)} className="img"></div>
          <span onClick={() => setShow(!show)}>
            <h3>{user?.username}</h3>
            <p>Upgrade Your Income</p>
          </span>

        {show && (
           <div className="logout">
            <button onClick={() => logOut()}>LogOut</button>
          </div>  
        )}
         
        </div>

      </aside>
)}
{!collap && (
  <aside className="vx-sidebar bar">
    <span onClick={() => setCollap(true)} className="bars">
      <FaBars className="barsss" />
    </span>
  </aside>
)}
      

      <main className="vx-main">
        <Outlet />
      </main>

    </div>
  );
};

export default Dashboard;