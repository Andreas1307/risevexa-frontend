import React, { useEffect, useState } from "react";
import "../FrontStyling/style.css"
import Bar from "../FrontElements/Bar.js";
import Navbar from "../FrontElements/Navbar.js";
import Footer from "../FrontElements/Footer.js";
import Pricing from "../FrontElements/Pricing.js";
import axios from "axios";
import directory from "../directory.js";
import { Link, useNavigate, useLocation } from "react-router-dom";




const PricingPage = () => {
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

    return( 
        <div>
            <Bar />
            <Navbar />

<Pricing />

            <section class="pricing-page">

            <div class="pricing-details">

<div class="details-header">
  <p class="details-eyebrow">WHAT YOU ACTUALLY GET</p>
  <h2 class="details-title">
    Everything Is Built Around One Thing — Higher Income
  </h2>
  <p class="details-sub">
    No courses. No theory. Just the exact system to move you into a better-paying role.
  </p>
</div>

<div class="details-grid">

  <div class="detail">
    <div class="icon">01</div>
    <h3>How recruiters classify your CV</h3>
    <p>Discover how recruiters actually interpret your CV in the first few seconds.</p>
  </div>

  <div class="detail">
    <div class="icon">02</div>
    <h3>Where your CV is undervaluing you</h3>
    <p>See how your current salary compares to realistic market opportunities.</p>
  </div>

  <div class="detail">
    <div class="icon">03</div>
    <h3>Professional CV Rewrite</h3>
    <p>Transform weak bullet points into achievement-focused statements.</p>
  </div>

  <div class="detail">
    <div class="icon">04</div>
    <h3>Interview Questions</h3>
    <p>Prepare for interviews with personalised questions based on your target role.</p>
  </div>

  <div class="detail">
    <div class="icon">05</div>
    <h3>Negotiation Script</h3>
    <p>Know exactly what to say when negotiating salary or promotions.</p>
  </div>

  <div class="detail highlight4">
    <div class="icon">06</div>
    <h3>Promotion likelihood vs current role</h3>
    <p>Understand what's stopping you reaching the next level in your career.</p>
  </div>

  <div class="detail">
    <div class="icon">07</div>
    <h3>Missing keywords blocking interviews</h3>
    <p>Identify missing keywords and improvements before recruiters ever see your CV.</p>
  </div>

  <div class="detail">
    <div class="icon">05</div>
    <h3>90-Day Career Plan</h3>
    <p>A personalised roadmap showing exactly what to do over the next three months.</p>
  </div>

</div>

</div>


<div class="value-section">

  <h2 class="value-title">The Real Value Breakdown</h2>
  <p class="value-subtitle">What people normally pay vs what you actually need</p>

  <div class="value-comparison">

    <div class="value-row">
      <span class="label">Career Coaching</span>
      <div class="dash"></div>
      <strong class="-item low">€500+</strong>
    </div>

    <div class="value-row">
      <span class="label">CV Rewrite Services</span>
      <div class="dash"></div>
      <strong class="price-item low">€150+</strong>
    </div>

    <div class="value-row">
      <span class="label">Courses That Don’t Convert</span>
      <div class="dash"></div>
      <strong class="price-item low">€200+</strong>
    </div>

    <div class="value-row highlight6">
      <span class="label">RiseVexa Full System</span>
      <div class="dash"></div>
      <strong class="price-item glow">€14.99</strong>
    </div>

  </div>

</div>





<section class="comparison-section">

  <div class="comparison-header">
    <p class="eyebrow">THE REALITY CHECK</p>
    <h2>
      Two People Start The Same Job.
      One Earns €28K. One Earns €46K.
    </h2>
    <p class="sub">
      The difference is not effort — it’s direction.
    </p>
  </div>

  <div class="comparison-grid">

    <div class="comparison-box left">
      <h3>You Without A System</h3>

      <div class="step">Keep applying randomly</div>
      <div class="step">Generic CV stays unchanged</div>
      <div class="step">No salary increase strategy</div>
      <div class="step weak">Same income 2–5 years later</div>
    </div>

    <div class="comparison-divider">
      <div class="line"></div>
      <div class="or">VS</div>
    </div>

    <div class="comparison-box right">
      <h3>With RiseVexa</h3>

      <div class="step">Income gap identified instantly</div>
      <div class="step">Exact next role shown</div>
      <div class="step">Step-by-step transition plan</div>
      <div class="step strong">Higher salary in ~90 days</div>
    </div>

  </div>

  <div class="comparison-cta">
    <p>This is where most people realise they’ve been underpaid for years.</p>
  </div>

</section>






  <div class="final-cta">

    <h2>Stop Guessing Your Career Moves</h2>
    <p>See exactly how to increase your income starting today.</p>

<Link to={"/sign-up"}>
   <button class="final-button">
      Get My Income Upgrade Plan
    </button>

</Link>
 

  </div>

</section>

            <Footer />
        </div>
    )
}

export default PricingPage