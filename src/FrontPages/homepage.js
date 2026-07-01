import React, { useEffect, useState } from "react";
import "../FrontStyling/style.css"
import Navbar from "../FrontElements/Navbar.js";
import Footer from "../FrontElements/Footer.js";
import Bar from "../FrontElements/Bar.js"
import Pricing from "../FrontElements/Pricing.js";
import axios from "axios";
import directory from "../directory.js";
import { Link, useNavigate } from "react-router-dom";




const faqs = [
  {
    question: "What exactly is RiseVexa?",
    answer:
      "RiseVexa analyzes your work experience, CV, qualifications and career goals to identify higher-paying roles you already have the potential to move into. It then generates a personalized report with salary insights, CV improvements, recruiter positioning, interview preparation and a practical transition plan."
  },
  {
    question: "How is RiseVexa different from ChatGPT?",
    answer:
      "Unlike a general AI chatbot, RiseVexa follows a structured career analysis process designed specifically for career progression. Every report includes recruiter perception analysis, realistic career transition suggestions, salary positioning, CV rewrites, interview strategies and a step-by-step action plan built around your own experience."
  },
  {
    question: "Why shouldn’t I just use ChatGPT?",
    answer:
      "ChatGPT gives general advice. RiseVexa uses a structured evaluation framework to interpret CV positioning, map role fit, and identify how recruiters are likely to classify your experience."
  },
  {
    question: "Is my report personalized?",
    answer:
      "Yes. Every report is generated using your own CV, work experience, qualifications, salary and career goals. Two people with different backgrounds will receive completely different recommendations."
  },
  {
    question: "Can I use RiseVexa if I don't know what career I want?",
    answer:
      "Absolutely. If you don't have a dream job in mind, RiseVexa identifies realistic career paths that match your existing experience and earning potential."
  },
  {
    question: "What will I receive?",
    answer:
      "Your report includes salary analysis, your strongest career transition opportunities, recruiter positioning insights, CV improvements, rewritten CV examples, transferable skills mapping, interview guidance, salary negotiation advice and a 90-day action plan."
  },
  {
    question: "How long does it take?",
    answer:
      "Most users complete the process in under two minutes. Your report is generated immediately after submitting your information."
  },
  {
    question: "Are the salary estimates guaranteed?",
    answer:
      "No. Salary estimates are based on current market data, role expectations and your experience. They are intended to provide realistic guidance rather than guarantee future earnings."
  },
  {
    question: "Is my CV and personal information secure?",
    answer:
      "Yes. Your information is processed securely and is only used to generate your personalized report. We do not sell your personal information."
  },
  {
    question: "Can RiseVexa help if I'm changing careers?",
    answer:
      "Yes. One of RiseVexa's main strengths is identifying transferable skills that can help you move into higher-paying industries or roles without starting from scratch."
  },
];


const Homepage = () => { 
  const [user, setUser] = useState(null)
  const navigate = useNavigate();
  const [active, setActive] = useState(null);


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
                <p class="eyebrow">AI CAREER ANALYSIS</p>

                <h1 class="hero-title2">
                  Your CV may be costing you higher-paying roles.
                </h1>

                <p class="hero-description2">
                RiseVexa shows you how your CV is actually being read — and which higher-paying roles you already qualify for.
                </p>

                <div class="hero-actions2">
                  <Link to={"/sign-up"}>
                    <button class="primary-button2">
                      Upload CV & Get My Plan
                    </button>
                  </Link>
                  <Link to={"/success-stories"}>
                    <button class="secondary-button2">
                      See Real Transformations
                    </button>
                  </Link>
                </div>

                <div class="trust-strip">
                  <div class="trust-pill">✓ Salary Gap Identified</div>
                  <div class="trust-pill">✓ Better Job Matches</div>
                  <div class="trust-pill">✓ CV Rewrite</div>
                </div>
              </div>

              <div class="hero-right">
                <div class="report-preview-card">
                  <div class="report-header">Income Upgrade Report</div>
                  <div class="report-line">
                    Current Role: Warehouse Operative
                  </div>
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

{/*
          <section class="problem-section">
            <h2 class="section-title">
              People Don’t Need More Content. They Need Better Outcomes.
            </h2>
            <p class="section-text">
              Most platforms sell courses. RiseVexa sells progression. We focus
              on interviews, offers, salary increases, and career movement.
            </p>
          </section>

          */}

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
                  <h3>Step 1 — CV Interpretation</h3>
                  <p>
                  We simulate how recruiters classify your CV in the first 10 seconds.
                  </p>
                </div>
              </div>

              <div class="flow-step">
                <div class="dot"></div>
                <div class="content">
                  <h3>Step 2 — Positioning Gap</h3>
                  <p>
                  We identify where your experience is being underestimated.
                  </p>
                </div>
              </div>

              <div class="flow-step">
                <div class="dot highlight"></div>
                <div class="content highlight2">
                  <h3>Step 3 — Role Mapping</h3>
                  <p>
                  We map your actual experience to higher-paying job categories.
                  </p>
                </div>
              </div>

              <div class="flow-step">
                <div class="dot"></div>
                <div class="content">
                  <h3>Step 4 — Career Output</h3>
                  <p>
                  You receive CV rewrites, target roles, and a transition plan.
                  </p>
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

<div class="before2">
  <div class="role2">Warehouse Operative</div>
  <div class="salary2">€29,000</div>
</div>

<div class="arrow2">
  <div class="reason2"></div>
</div>

<div class="after2">
  <div class="role2">Remote Sales Rep</div>
  <div class="salary2">€47,400</div>
</div>

<div class="value2">
  +€18,400 / year
</div>


</div>

<div class="story2">

<div class="before2">
  <div class="role2">Retail Supervisor</div>
  <div class="salary2">€30,000</div>
</div>

<div class="arrow2">
  <div class="reason2"></div>
</div>

<div class="after2">
  <div class="role2">Recruitment Consultant</div>
  <div class="salary2">€44,200</div>
</div>

<div class="value2">
  +€14,200 / year
</div>

</div>

<div class="story2">

<div class="before2">
  <div class="role2">Administrative Assistant</div>
  <div class="salary2">€31,000</div>
</div>

<div class="arrow2">
  <div class="reason2"></div>
</div>

<div class="after2">
  <div class="role2">Project Coordinator</div>
  <div class="salary2">€42,700</div>
</div>

<div class="value2">
  +€11,700 / year
</div>

</div>









            </div>
          </section>



          <section class="features-section">

<div class="section-header">

    <span class="section-tag">
        WHAT YOU RECEIVE
    </span>

    <h2>
        Everything Included In Your Career Upgrade Report
    </h2>

    <p>
        Stop guessing what's holding your career back. Every report is personalised using your CV, work history and career goals.
    </p>

</div>

<div class="feature-grid">

    <div class="feature-cardd">
        <div class="icon">👀</div>
        <h3>How recruiters classify your CV</h3>
        <p>Discover how recruiters actually interpret your CV in the first few seconds.</p>
    </div>

    <div class="feature-cardd">
        <div class="icon">💰</div>
        <h3>Where your CV is undervaluing you</h3>
        <p>See how your current salary compares to realistic market opportunities.</p>
    </div>

    <div class="feature-cardd">
        <div class="icon">✍️</div>
        <h3>Professional CV Rewrite</h3>
        <p>Transform weak bullet points into achievement-focused statements.</p>
    </div>

    <div class="feature-cardd">
        <div class="icon">🎯</div>
        <h3>Interview Questions</h3>
        <p>Prepare for interviews with personalised questions based on your target role.</p>
    </div>

    <div class="feature-cardd">
        <div class="icon">🤝</div>
        <h3>Negotiation Script</h3>
        <p>Know exactly what to say when negotiating salary or promotions.</p>
    </div>

    <div class="feature-cardd">
        <div class="icon">📈</div>
        <h3>Promotion likelihood vs current role</h3>
        <p>Understand what's stopping you reaching the next level in your career.</p>
    </div>

    <div class="feature-cardd">
        <div class="icon">🤖</div>
        <h3>Missing keywords blocking interviews</h3>
        <p>Identify missing keywords and improvements before recruiters ever see your CV.</p>
    </div>

    <div class="feature-cardd">
        <div class="icon">🚀</div>
        <h3>90-Day Career Plan</h3>
        <p>A personalised roadmap showing exactly what to do over the next three months.</p>
    </div>

</div>

</section>




          <section class="credibility-section">
            <div class="credibility-wrapper">
              <h2 class="credibility-title">
              WHY THIS WORKS
              </h2>

              <div class="credibility-flow">
                <div class="credibility-step">
                  <div class="step-line"></div>
                  <div class="step-dot"></div>

                  <div class="credibility-content">
                    <h3>RiseVexa evaluates your CV in three ways:</h3>
                    <p>
                    ✓ How recruiters interpret your experience
                    </p>
                    <p>
                    ✓ What roles your background actually matches
                    </p>
                    <p>
                    ✓ How your CV is currently limiting your salary positioning
                    </p>
                  </div>
                </div>

                <div class="credibility-step">
                  <div class="step-line"></div>
                  <div class="step-dot"></div>

                  <div class="credibility-content highlight2">
                    <h3>Then it converts that into:</h3>
                    <p>
                    ✓ Target roles
                    </p>
                    <p>
                    ✓ CV rewrites
                    </p>
                    <p>
                    ✓ Salary positioning adjustments
                    </p>
                  </div>
                </div>

             
              </div>
            </div>
          </section>

          <section class="comparison-section">
            <div class="comparison-header">
              <h2 class="comparison-title">Two Paths. Same Starting Point.</h2>
              <p class="comparison-sub">
                The difference isn’t effort — it’s direction.
              </p>
            </div>

            <div class="paths-container">
              <div class="path path-left">
                <h3>YOU APPLY WITHOUT POSITIONING FIXES</h3>

                <div class="path-steps">
                  <div class="step">CV is interpreted at a lower level</div>
                  <div class="step">Applications match lower-tier roles</div>
                  <div class="step">No clear progression narrative</div>
                  <div class="step final">Salary stays flat</div>
                </div>
              </div>

              <div class="path-split">
                <div class="split-line"></div>
                <div class="split-circle">YOU</div>
              </div>

              <div class="path path-right">
                <h3>You Use RiseVexa</h3>

                <div class="path-steps">
                  <div class="step">CV interpreted at correct level</div>
                  <div class="step">Higher-fit roles surfaced</div>
                  <div class="step">Clear role transition path</div>
                  <div class="step final highlight3">Improved interview rate</div>
                </div>
              </div>
            </div>
          </section>

          <Pricing />

          <section class="urgency-section">
            <div class="urgency-wrapper">
              <div class="urgency-left">
                <h2 class="urgency-title">
                  Every Month You Wait, You’re Leaving Money Behind
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




          <section className="faq-section">
      <div className="faq-container">

        <h2>Frequently Asked Questions</h2>

        <p className="faq-subtitle">
          Everything you need to know before getting your personalized Income Upgrade Report.
        </p>

        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${active === index ? "open" : ""}`}
            onClick={() =>
              setActive(active === index ? null : index)
            }
          >
            <div className="faq-question">
              <span>{faq.question}</span>
              <span>{active === index ? "−" : "+"}</span>
            </div>

            <div className="faq-answer">
              {faq.answer}
            </div>
          </div>
        ))}

      </div>
    </section>




          <section class="final-cta-section">
            <div class="cta-core">
              <p class="cta-eyebrow">FINAL STEP</p>

              <h2 class="cta-title">
              Get your CV interpreted like a recruiter would see it
              </h2>

              <p class="cta-sub">
                In less than 2 minutes, you’ll know exactly how much more you
                could be earning — and how to get there.
              </p>

              <div class="cta-action">
                <Link to={"/sign-up"}>
                  <button class="cta-button">Get My Income Upgrade Plan</button>
                </Link>
                <span class="cta-guarantee">
                  Takes 2 minutes • No commitment
                </span>
              </div>
            </div>

            <div class="cta-glow"></div>
          </section>

          <Footer />
        </div>
      </div>
    );
}

export default Homepage