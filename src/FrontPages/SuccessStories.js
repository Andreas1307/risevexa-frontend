import React, { useEffect, useState } from "react";
import "../FrontStyling/style.css";
import Bar from "../FrontElements/Bar.js";
import Navbar from "../FrontElements/Navbar.js";
import Footer from "../FrontElements/Footer.js";
import axios from "axios";
import directory from "../directory.js";
import { Link, useNavigate, useLocation } from "react-router-dom";




const SuccessStories = () => {

  const [user, setUser] = useState(null)
  const navigate = useNavigate();



  useEffect(() => {
    const authCheck = async () => {
      try {
        const res = await axios.get(`${directory}/auth-check`, {
          withCredentials: true,
          validateStatus: () => true, // prevent Axios throwing on 401
        });
  
        if (res.status === 200 && res.data.user) {
          setUser(res.data.user);
          navigate("/dashboard")
        } else {
          setUser(null);
        }
      } catch (e) {
        console.error("Unexpected network or server error during auth check", e);
      }
    };
  
    authCheck();
  }, [navigate, directory]);

    return (
        <div>
            <Bar />
            <Navbar />
 <section class="success-section">

  <div class="success-hero">
    <h1>Real People. Real Salary Jumps.</h1>
    <p>
      These are not lucky breaks. These are structured transitions
      from low-paying roles into higher-income careers using positioning,
      strategy, and execution.
    </p>
  </div>

  <div class="success-stats">
    <div class="stat">
      <h2>€18K+</h2>
      <p>Average salary increase</p>
    </div>
    <div class="stat">
      <h2>60–90 Days</h2>
      <p>Typical transition time</p>
    </div>
    <div class="stat">
      <h2>4X</h2>
      <p>Faster than applying blindly</p>
    </div>
  </div>

  <div class="featured-story">

    <div class="featured-left">
      <h2>Warehouse → Remote Sales</h2>

      <div class="salary-bar">
        <div class="salary-old">€28K</div>
        <div class="salary-line"></div>
        <div class="salary-new">€46.4K</div>
      </div>

      <p class="featured-text">
        “I spent months applying to random jobs with no results. RiseVexa showed me
        exactly how to reposition my experience and what role to target.
        Within 10 weeks I had multiple interviews and landed a remote sales role.”
      </p>

      <div class="featured-meta">
        Daniel, 27 • Transitioned in 90 Days
      </div>
    </div>

    <div class="featured-right">
      <div class="growth-circle">
        <span>+€18,400</span>
        <p>Annual Increase</p>
      </div>
    </div>

  </div>

  <div class="stories-grid">

<div class="story-card">
  <div class="story-header">
    <span class="story-role">Retail → Recruitment</span>
    <span class="story-time">75 Days</span>
  </div>

  <div class="salary-visual">
    <div class="salary-old">€24.5K</div>
    <div class="salary-arrow"></div>
    <div class="salary-new">€38.7K</div>
  </div>

  <div class="salary-gain">+€14,200</div>

  <p class="story-text">
    “I finally understood what employers were actually looking for.
    That changed everything.”
  </p>
</div>

<div class="story-card">
  <div class="story-header">
    <span class="story-role">Admin → Project Coordinator</span>
    <span class="story-time">60 Days</span>
  </div>

  <div class="salary-visual">
    <div class="salary-old">€29K</div>
    <div class="salary-arrow"></div>
    <div class="salary-new">€41.2K</div>
  </div>

  <div class="salary-gain">+€12,200</div>

  <p class="story-text">
    “I didn’t realise how valuable my experience was until it was positioned correctly.”
  </p>
</div>

<div class="story-card">
  <div class="story-header">
    <span class="story-role">Customer Service → Sales</span>
    <span class="story-time">80 Days</span>
  </div>

  <div class="salary-visual">
    <div class="salary-old">€26K</div>
    <div class="salary-arrow"></div>
    <div class="salary-new">€39K</div>
  </div>

  <div class="salary-gain">+€13,000</div>

  <p class="story-text">
    “The roadmap removed all guesswork. I just followed the steps.”
  </p>
</div>

</div>


<section class="activity-section">

  <div class="activity-header">
    <h2>People Are Already Upgrading Their Income</h2>
    <p>Live activity from users transforming their careers right now</p>
  </div>

  <div class="activity-feed">

    <div class="activity-item">
      <div class="pulse"></div>
      <p><strong>James</strong> switched from Warehouse → Sales</p>
      <span>+€17,200 increase • 2 hours ago</span>
    </div>

    <div class="activity-item">
      <div class="pulse"></div>
      <p><strong>Laura</strong> identified a better role path</p>
      <span>Potential +€12,000 • 5 hours ago</span>
    </div>

    <div class="activity-item">
      <div class="pulse"></div>
      <p><strong>Mark</strong> optimized CV for higher-paying roles</p>
      <span>Interview secured • Today</span>
    </div>

    <div class="activity-item">
      <div class="pulse"></div>
      <p><strong>Sophie</strong> transitioned into remote sales</p>
      <span>+€19,800 increase • Yesterday</span>
    </div>

  </div>

</section>

  

  <div class="success-cta">
    <h2>You’re Probably Underearning Right Now</h2>
    <p>Find out how much more you could be making — and how to get there.</p>
  <Link to={"/sign-up"}>
  <button>Get My Income Upgrade Plan</button>
  </Link>  
  </div>

</section>
<Footer />
        </div>
       
    )
}

export default SuccessStories