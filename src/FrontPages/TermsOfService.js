import React from "react";
import "../FrontStyling/style.css"
import Bar from "../FrontElements/Bar.js";
import Navbar from "../FrontElements/Navbar.js";
import Footer from "../FrontElements/Footer.js";


export default function TermsOfService() {
    return (
        <div>
            <Bar />
            <Navbar />

<div className="legal-container">
        <h1>Terms of Service</h1>
  
        <p>Last updated: May 2026</p>
  
        <h2>1. Service Description</h2>
        <p>
          RiseVexa provides AI-powered career and income analysis based on user-submitted information such as CVs, job history, and salary data.
        </p>
  
        <h2>2. Eligibility</h2>
        <p>
          You must be at least 18 years old to use this service.
        </p>
  
        <h2>3. User Responsibility</h2>
        <ul>
          <li>You agree to provide accurate information</li>
          <li>You understand AI-generated insights are estimates, not guarantees</li>
          <li>You are responsible for how you use career recommendations</li>
        </ul>
  
        <h2>4. Payments</h2>
        <p>
          Some features may be paid. All payments are final unless stated otherwise in the Refund Policy.
        </p>
  
        <h2>5. No Guarantee</h2>
        <p>
          We do not guarantee job placement, salary increases, or hiring outcomes.
        </p>
  
        <h2>6. Intellectual Property</h2>
        <p>
          All content, branding, and AI outputs remain the property of RiseVexa unless otherwise stated.
        </p>
  
        <h2>7. Termination</h2>
        <p>
          We may suspend accounts that misuse the platform or violate terms.
        </p>
  
        <h2>8. Contact</h2>
        <p>support@risevexa.com</p>
      </div>

      <Footer />
        </div>
     
    );
  }