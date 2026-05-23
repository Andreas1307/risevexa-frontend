import React, { useEffect, useState } from "react";
import "../FrontStyling/style.css"
import Navbar from "../FrontElements/Navbar";
import Footer from "../FrontElements/Footer";
import Bar from "../FrontElements/Bar";
import axios from "axios";
import directory from "../directory.js";
import { Link, useNavigate, useLocation } from "react-router-dom";



const HowItWorks = () => {
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
            <section class="how-page">

<div class="how-hero">
  <p class="how-eyebrow">HOW RISEVEXA WORKS</p>
  <h1 class="how-title">
    Your Career Upgrade Isn’t Random.
    It’s A System.
  </h1>
  <p class="how-subtitle">
    RiseVexa takes your current job, CV, qualifications and salary position,
    then maps out the fastest route into a better-paying career.
    No guessing. No endless learning. Just a direct path to higher income.
  </p>
</div>

<div class="how-timeline">

  <div class="timeline-line"></div>

  <div class="step-block">
    <div class="step-number">01</div>
    <div class="step-content">
      <h2>Upload Your Information</h2>
      <p>
        Start by uploading your CV and sharing your current role,
        work experience, qualifications, salary, and where you want to go.
      </p>

      <div class="step-list">
        <div>Current job role</div>
        <div>CV / experience</div>
        <div>Qualifications</div>
        <div>Salary level</div>
      </div>
    </div>
  </div>

  <div class="step-block">
    <div class="step-number">02</div>
    <div class="step-content">
      <h2>We Analyze Your Career Position</h2>
      <p>
        RiseVexa scans your information and identifies where your current
        earning potential is being wasted.
      </p>

      <div class="step-list">
        <div>Income gap detection</div>
        <div>Skill translation</div>
        <div>Career positioning</div>
        <div>Missed opportunities</div>
      </div>
    </div>
  </div>

  <div class="step-block">
    <div class="step-number">03</div>
    <div class="step-content">
      <h2>Discover Your Best Next Role</h2>
      <p>
        Instead of random job applications, we identify the strongest
        career move for your background.
      </p>

      <div class="step-list">
        <div>Remote sales</div>
        <div>Recruitment</div>
        <div>Operations roles</div>
        <div>Project support roles</div>
      </div>
    </div>
  </div>

  <div class="step-block">
    <div class="step-number">04</div>
    <div class="step-content">
      <h2>Get Your Income Upgrade Plan</h2>
      <p>
        You receive a step-by-step roadmap that shows exactly what to do,
        how to position yourself and how to get interviews.
      </p>

      <div class="step-list">
        <div>Transition roadmap</div>
        <div>CV rewrite strategy</div>
        <div>Interview preparation</div>
        <div>Application action plan</div>
      </div>
    </div>
  </div>

  <div class="step-block">
    <div class="step-number">05</div>
    <div class="step-content">
      <h2>Move Into A Better Paying Role</h2>
      <p>
        The result isn’t more information.
        The result is a stronger position, more interviews and higher income.
      </p>

      <div class="step-list">
        <div>Higher salary</div>
        <div>Clear direction</div>
        <div>Less wasted time</div>
        <div>Career growth</div>
      </div>
    </div>
  </div>

</div>

<div class="how-bottom">
  <h2>The Difference Is Direction</h2>
  <p>
    Most people are not underperforming — they’re simply moving in the wrong direction.
    RiseVexa helps you move towards the role that matches your real earning potential.
  </p>

  <Link to={"/sign-up"}><button>Get My Income Upgrade</button></Link>
</div>

</section>
<Footer />
        </div>
    )
}

export default HowItWorks