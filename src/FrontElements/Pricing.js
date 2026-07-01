import React from "react";
import "../FrontStyling/style.css"
import { Link } from "react-router-dom";





const Pricing = () => {

    return (
        <section class="pricing-section">
  <div class="pricing-wrapper">

    <div class="pricing-left">
      <p class="pricing-eyebrow">YOU'RE UNDERPAID</p>

      <h2 class="pricing-title">
      Recruiters don't reject experience.
      They reject positioning.
      </h2>

      <p class="pricing-desc">
      Your report shows exactly how your CV is being interpreted—and how to change it.
      </p>

      <div class="pricing-proof">
        <div class="proof-line">+€18,400 typical jump</div>
        <div class="proof-line">~90 day transition</div>
        <div class="proof-line">Based on real job data</div>
      </div>
    </div>

    <div class="pricing-right">

      <div class="money-stack">

        <div class="money current">
          <span>Now</span>
          <h3>€28K</h3>
        </div>

        <div class="money mid">
          <span>After</span>
          <h3>€36K</h3>
        </div>

        <div class="money target">
          <span>Potential</span>
          <h3>€46K</h3>
        </div>

      </div>

      <div class="conversion-line">
        <div class="line"></div>
        <div class="dot"></div>
      </div>

      <div class="price-block">
        <div class="price offer"><div className="price-offer">€14.99</div> <span>€0.00</span></div>
      
      
        <div className="price-block-text">
  <div className="price-item">✓ Full Income Upgrade Report</div>
  <div className="price-item">✓ Recruiter Positioning Analysis</div>
  <div className="price-item">✓ Best Next Career Recommendation</div>
  <div className="price-item">✓ Personalised CV Rewrite Suggestions</div>
  <div className="price-item">✓ Salary Negotiation Script</div>
  <div className="price-item">✓ 90-Day Career Transition Plan</div>
  <div className="price-item">✓ Lifetime Access</div>
</div>
      
      
      <Link to={"/sign-up"}><button class="pricing-cta">Unlock My Income Upgrade</button></Link>
        <p class="pricing-note">
        One-time payment. Lifetime upside.
      </p>
      </div>


    </div>

  </div>
</section>
    )
}

export default Pricing;