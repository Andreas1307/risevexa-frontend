import React from "react";
import "../FrontStyling/style.css"
import Bar from "../FrontElements/Bar.js";
import Navbar from "../FrontElements/Navbar.js";
import Footer from "../FrontElements/Footer.js";


export default function RefundPolicy() {
    return (

        <div >
            <Bar />
            <Navbar />


<div className="legal-container">
        <h1>Refund Policy</h1>
  
        <p>Last updated: May 2026</p>
  
        <h2>1. Digital Service</h2>
        <p>
          Our product provides instant digital AI-generated career reports. Because of this, refunds are limited.
        </p>
  
        <h2>2. Refund Eligibility</h2>
        <ul>
          <li>If the service fails to generate a report</li>
          <li>If you are charged multiple times by mistake</li>
          <li>If a technical error prevents access to your report</li>
        </ul>
  
        <h2>3. Non-Refundable Cases</h2>
        <ul>
          <li>Disagreement with AI results</li>
          <li>Change of mind after report generation</li>
          <li>Unrealistic expectations of salary outcomes</li>
        </ul>
  
        <h2>4. How to Request a Refund</h2>
        <p>
          Email support@risevexa.com within 7 days of purchase with your transaction ID.
        </p>
  
        <h2>5. Processing Time</h2>
        <p>
          Approved refunds are processed within 5–10 business days.
        </p>
      </div>

      <Footer />
        </div>
    
    );
  }