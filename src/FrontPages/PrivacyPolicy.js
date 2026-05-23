import React from "react";
import "../FrontStyling/style.css"
import Bar from "../FrontElements/Bar.js";
import Navbar from "../FrontElements/Navbar.js";
import Footer from "../FrontElements/Footer.js";


export default function PrivacyPolicy() {
    return (

        <div>
            <Bar />

            <Navbar />


<div className="legal-container">
        <h1>Privacy Policy</h1>
  
        <p>Last updated: May 2026</p>
  
        <h2>1. Overview</h2>
        <p>
          This Privacy Policy explains how we collect, use, and protect your personal data when you use our career analysis platform.
          We comply with the General Data Protection Regulation (GDPR) and Irish data protection law.
        </p>
  
        <h2>2. Data We Collect</h2>
        <ul>
          <li>Full name and account details</li>
          <li>CV / resume content</li>
          <li>Current job title and work experience</li>
          <li>Salary information</li>
          <li>Career goals and desired roles</li>
          <li>Usage data (how you interact with the platform)</li>
        </ul>
  
        <h2>3. How We Use Your Data</h2>
        <ul>
          <li>To generate personalised career and salary reports</li>
          <li>To improve AI accuracy and recommendations</li>
          <li>To provide customer support</li>
          <li>To maintain platform security and prevent abuse</li>
        </ul>
  
        <h2>4. Legal Basis (GDPR)</h2>
        <p>
          We process your data based on:
          consent, contract performance (providing the service), and legitimate interest (improving the product).
        </p>
  
        <h2>5. Data Storage</h2>
        <p>
          Your data is securely stored in encrypted databases. We retain data only as long as necessary to provide the service.
        </p>
  
        <h2>6. Data Sharing</h2>
        <p>
          We do not sell your personal data. We may use trusted infrastructure providers (e.g. database or hosting services) under strict data processing agreements.
        </p>
  
        <h2>7. Your Rights</h2>
        <ul>
          <li>Access your data</li>
          <li>Request correction or deletion</li>
          <li>Withdraw consent at any time</li>
          <li>Request data portability</li>
        </ul>
  
        <h2>8. Contact</h2>
        <p>If you have questions about your data, contact: support@risevexa.com</p>
      </div>

<Footer />
        </div>
     
    );
  }