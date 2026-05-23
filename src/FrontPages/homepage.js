import React, { useEffect, useState } from "react";
import "../FrontStyling/style.css"
import Navbar from "../FrontElements/Navbar";
import Footer from "../FrontElements/Footer";
import Bar from "../FrontElements/Bar.js"
import Pricing from "../FrontElements/Pricing.js";
import axios from "axios";
import directory from "../directory.js";
import { Link, useNavigate } from "react-router-dom";


const Homepage = () => { 
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

<div class="page-shell">
  <div class="background-glow glow-one"></div>
  <div class="background-glow glow-two"></div>

 <Bar />
 <Navbar />
  <section class="hero-section2">
   
  

    <div class="hero-grid2">
      <div class="hero-left2">
        <p class="eyebrow">CAREER INCOME TRANSFORMATION PLATFORM</p>

        <h1 class="hero-title2">
          You Could Be Losing €10,000–€30,000 Every Year Without Realising It
        </h1>

        <p class="hero-description2">
          RiseVexa analyzes your CV, current role, experience, and qualifications
          to reveal your fastest path into a better-paying career.
        </p>

        <div class="hero-actions2">
          <Link to={"/sign-up"}><button class="primary-button2">Upload CV & Get My Plan</button></Link>
          <Link to={"/success-stories"}><button class="secondary-button2">See Real Transformations</button></Link>
        </div>

        <div class="trust-strip">
          <div class="trust-pill">CV Analysis</div>
          <div class="trust-pill">Income Path</div>
          <div class="trust-pill">Career Upgrade</div>
        </div>
      </div>

      <div class="hero-right">
        <div class="report-preview-card">
          <div class="report-header">Income Upgrade Report</div>
          <div class="report-line">Current Role: Warehouse Operative</div>
          <div class="report-line">Target Role: Remote Sales Rep</div>
          <div class="report-line">Salary Increase: +€18,400/year</div>
          <div class="report-line">Transition Time: 90 Days</div>
          <div class="report-highlight">Action Plan Ready</div>
        </div>
      </div>
    </div>
  </section>

  {/* SOCIAL PROOF LIVE STRIP */}
<div className="vx-live-strip">

<span>🔵 James moved Warehouse → Sales (+€17,200)</span>
<span>🟢 Laura unlocked Recruitment path (+€14,000)</span>
<span>🟣 Mark got 3 interviews in 5 days</span>

</div>

  <section class="stats-section2">
    <div class="stat-card2">
      <h2>4.8/5</h2>
      <p>User satisfaction</p>
    </div>

    <div class="stat-card2">
      <h2>1,000+</h2>
      <p>Career reports generated</p>
    </div>

    <div class="stat-card2">
      <h2>€18K avg</h2>
      <p>Income uplift identified</p>
    </div>
  </section>

  <section class="problem-section">
    <h2 class="section-title">People Don’t Need More Content. They Need Better Outcomes.</h2>
    <p class="section-text">
      Most platforms sell courses. RiseVexa sells progression. We focus on
      interviews, offers, salary increases, and career movement.
    </p>
  </section>

  <section class="how-it-works-section2">

  <div class="section-header3">
    <p class="eyebrow">THE SYSTEM</p>
    <h2>From Stuck → Hired Better</h2>
  </div>

  <div class="flow-container">

    <div class="flow-line"></div>

    <div class="flow-step">
      <div class="dot"></div>
      <div class="content">
        <h3>Analyze</h3>
        <p>We find exactly where your current job is limiting your income.</p>
      </div>
    </div>

    <div class="flow-step">
      <div class="dot"></div>
      <div class="content">
        <h3>Translate</h3>
        <p>Your real experience is converted into higher-paying opportunities.</p>
      </div>
    </div>

    <div class="flow-step">
      <div class="dot highlight"></div>
      <div class="content highlight">
        <h3>Build</h3>
        <p>Your CV, positioning, and career path are rebuilt for income growth.</p>
      </div>
    </div>

    <div class="flow-step">
      <div class="dot"></div>
      <div class="content">
        <h3>Execute</h3>
        <p>We guide applications, interviews, and the actual job transition.</p>
      </div>
    </div>

  </div>

</section>

  <section class="social-proof-section">

<div class="section-header3">
  <p class="eyebrow">REAL OUTCOMES</p>
  <h2>Actual Income Shifts</h2>
</div>

<div class="story-track2">

  <div class="story2">
    <div class="before2">Warehouse</div>
    <div class="arrow2">→</div>
    <div class="after2">Remote Sales</div>
    <div class="value2">+€18,400</div>
  </div>

  <div class="story2">
    <div class="before2">Retail</div>
    <div class="arrow2">→</div>
    <div class="after2">Recruitment</div>
    <div class="value2">+€14,200</div>
  </div>

  <div class="story2">
    <div class="before2">Admin</div>
    <div class="arrow2">→</div>
    <div class="after2">Project Role</div>
    <div class="value2">+€11,700</div>
  </div>

</div>

</section>

<section class="credibility-section">
  <div class="credibility-wrapper">

    <h2 class="credibility-title">
      Why People Actually Trust RiseVexa
    </h2>

    <div class="credibility-flow">

      <div class="credibility-step">
        <div class="step-line"></div>
        <div class="step-dot"></div>

        <div class="credibility-content">
          <h3>Real Career Outcomes</h3>
          <p>
            This isn’t advice. It’s a system designed to move you into interviews,
            offers, and higher-paying roles.
          </p>
        </div>
      </div>

      <div class="credibility-step">
        <div class="step-line"></div>
        <div class="step-dot"></div>

        <div class="credibility-content highlight2">
          <h3>Built For Income Growth</h3>
          <p>
            Every recommendation is based on increasing your salary —
            not keeping you busy with useless steps.
          </p>
        </div>
      </div>

      <div class="credibility-step">
        <div class="step-line"></div>
        <div class="step-dot"></div>

        <div class="credibility-content">
          <h3>Personalized Strategy</h3>
          <p>
            Your exact experience is translated into a better-paying path —
            no templates, no generic plans.
          </p>
        </div>
      </div>

    </div>

  </div>
</section>

<section class="comparison-section">

  <div class="comparison-header">
    <h2 class="comparison-title">
      Two Paths. Same Starting Point.
    </h2>
    <p class="comparison-sub">
      The difference isn’t effort — it’s direction.
    </p>
  </div>

  <div class="paths-container">

    <div class="path path-left">
      <h3>You Stay Where You Are</h3>

      <div class="path-steps">
        <div class="step">Keep applying randomly</div>
        <div class="step">No clear strategy</div>
        <div class="step">Same type of roles</div>
        <div class="step final">Salary barely changes</div>
      </div>
    </div>

    <div class="path-split">
      <div class="split-line"></div>
      <div class="split-circle">YOU</div>
    </div>

    <div class="path path-right">
      <h3>You Use RiseVexa</h3>

      <div class="path-steps">
        <div class="step">Income gap revealed</div>
        <div class="step">Best role identified</div>
        <div class="step">Clear transition plan</div>
        <div class="step final highlight3">Higher-paying job</div>
      </div>
    </div>

  </div>

</section>

  <Pricing />

  <section class="urgency-section">

  <div class="urgency-wrapper">

    <div class="urgency-left">
      <h2 class="urgency-title">
        Every Month You Wait,
        You’re Leaving Money Behind
      </h2>

      <p class="urgency-desc">
        The gap between your current job and your potential salary
        isn’t just time — it’s lost income every single day.
      </p>
      <Link to={"/sign-up"}>
      <button class="urgency-cta">
        Stop Losing Money → Get My Plan
      </button>
      </Link>
    </div>

    <div class="urgency-right">

      <div class="loss-visual">

        <div class="loss-amount">€0</div>

        <div class="loss-label">Estimated Lost Income</div>

        <div class="loss-bar">
          <div class="loss-fill"></div>
        </div>

        <div class="loss-scale">
          <span>Now</span>
          <span>€10K+</span>
        </div>

      </div>

    </div>

  </div>

</section>



 <section class="final-cta-section">

<div class="cta-core">

  <p class="cta-eyebrow">FINAL STEP</p>

  <h2 class="cta-title">
    Stay Where You Are
    Or See What You’re Actually Worth
  </h2>

  <p class="cta-sub">
    In less than 2 minutes, you’ll know exactly how much more you could be earning — and how to get there.
  </p>

  <div class="cta-action">
  <Link to={"/sign-up"}>
    <button class="cta-button">
      Get My Income Upgrade Plan
    </button>
    </Link>
    <span class="cta-guarantee">Takes 2 minutes • No commitment</span>
  </div>

</div>

<div class="cta-glow"></div>

</section>




<Footer />
</div>



        </div>
    )
}

export default Homepage