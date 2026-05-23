import React from "react";
import "../FrontElements/Pricing.js"
import { Link } from "react-router-dom";





const Pricing = () => {

    return (
        <section class="pricing-section">
  <div class="pricing-wrapper">

    <div class="pricing-left">
      <p class="pricing-eyebrow">YOU'RE UNDERPAID</p>

      <h2 class="pricing-title">
        You're Not Stuck.
        You're Just Positioned Wrong.
      </h2>

      <p class="pricing-desc">
        We show you the exact shift that turns your current experience
        into a higher-paying role — with zero guesswork.
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
        <div class="price">€14.99</div>
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