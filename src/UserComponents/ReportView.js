import React from "react";
import "../UserStyling/dashboard.css"
import { useRef } from "react";
import { FaTimes } from "react-icons/fa";
import { useNavigate, useSearchParams } from "react-router-dom";


const ReportView = ({ result, setResult }) => {
    
  const navigate = useNavigate();
  const reportRef = useRef(null);





    return (
        <div className="report">

        <div className="report-container" ref={reportRef}>
        
          <div onClick={() => {
            navigate("/dashboard/reports")
            setResult(null)
          }} className="close-report">
        <FaTimes />
            </div>
        
        
        
        
        {/* ================= HERO TRANSFORMATION ================= */}
        <section className="hero-intro">
        
          <div className="warning-banner">
            🚨 Your Profile Is Currently Under-Earning Relative To Market
          </div>
        
          <h1 className="warning">
            Your Income Upgrade Potential:
            <span className="highlight">
          {result?.ai_report.income_analysis.income_gap} per year
        </span>
          </h1>
        
          <p className="subtext">
            Based on 12,000+ real job transitions, your current positioning
            is not aligned with your earning potential.
          </p>
        
          <div className="big-metrics">
        
        <div className="metric danger">
          <span>Current Income</span>
        
          <h2>
            {String(result?.current_salary || "").includes("€")
              ? result?.current_salary
              : `€${result?.current_salary}`}
          </h2>
        </div>
        
            <div className="metric neutral">
              <span>Market Value</span>
              <h2>
          {result?.ai_report.income_analysis.estimated_fair_salary}
        </h2>
            </div>
        
            <div className="metric success">
              <span>Optimised Income</span>
              <h2>
          {result?.ai_report.final_summary.income_projection}
        </h2>
            </div>
        
          </div>
        
        </section>
        
        
        {/* ================= MARKET DEMAND ================= */}
        <section className="report-card market-demand">
        
          <h2>Market Demand Analysis</h2>
        
          <div className="demand-wrapper">
        
            <div className="demand-score">
        
              <div className="score-circle">
                {result?.ai_report.market_demand?.score}
              </div>
        
              <span>Demand Score</span>
        
            </div>
        
            <div className="demand-details">
        
              <p>
                {result?.ai_report.market_demand?.explanation}
              </p>
        
              <div className="demand-tags">
                <span>Demand: High</span>
                <span>Competition: Moderate</span>
                <span>Salary Trajectory: Strong</span>
              </div>
        
            </div>
        
          </div>
        
        </section>
        
        
        
        {/* ================= RECRUITER PSYCHOLOGY ================= */}
        <section className="report-card deep-insight">
        
          <h2>What Recruiters Actually See vs Reality</h2>
        
          <div className="split-view">
        
            <div className="side bad">
              <h3>❌ How You Present Yourself</h3>
              <ul>
                <li>Job title interpreted as low-skill role</li>
                <li>No quantified achievements visible</li>
                <li>No industry repositioning</li>
                <li>Undervalued experience framing</li>
              </ul>
            </div>
        
            <div className="side good">
              <h3>✅ How You SHOULD Be Seen</h3>
              <ul>
              <li>
          {result?.ai_report.best_next_role.target_role}
        </li>
                <li>Transferable high-value skills highlighted</li>
                <li>Revenue-impact framing</li>
                <li>Salary band repositioned upward</li>
              </ul>
            </div>
        
          </div>
        
        </section>
        
        {/* ================= BIGGEST INCOME LEAK ================= */}
        <section className="report-card income-leak">
        
          <h2>Your Biggest Income Leak</h2>
        
          <div className="leak-box">
        
            <div className="warning-icon">
              ⚠️
            </div>
        
            <p>
              {result?.ai_report.biggest_income_leak}
            </p>
        
          </div>
        
        </section>
        
        
        {/* ================= BEST ROLE ================= */}
        <section className="report-card">
        
          <h2>Best Income Move (Highest ROI Role)</h2>
        
          <div className="role-card">
        
            <div className="role-comparison">
              <div>
                <h4>Current Role</h4>
                <p>{result?.current_job}</p>
              </div>
        
              <div className="arrow">→</div>
        
              <div>
                <h4>Recommended Role</h4>
                <p>
          {result?.ai_report.best_next_role.target_role}
        </p>
              </div>
            </div>
        
            <div className="salary-block">
        
              <div>
                <span>Expected Range</span>
                <h3>
          {result?.ai_report.best_next_role.salary_range}
        </h3>
              </div>
        
              <div>
                <span>Income Increase</span>
                <h3 className="green">
                {
          result?.ai_report.best_next_role.expected_salary_jump
        }
                </h3>
              </div>
        
            </div>
        
            <p className="reasoning">
            {result?.ai_report.best_next_role.reasoning}
            </p>
        
          </div>
        
        </section>
        
        
        
        {/* ================= WHY YOU ALREADY QUALIFY ================= */}
        <section className="report-card">
        
          <h2>Why You Already Qualify</h2>
        
          <div className="skills-match-grid">
        
            {result?.ai_report.transferable_skills_match?.map((skill, i) => (
              <div className="skill-match-card" key={i}>
        
                <div className="skill-top">
                  <span className="check">✅</span>
        
                  <div>
                    <h3>{skill.current_skill}</h3>
        
                    <p>
                      → Transferable to {skill.maps_to}
                    </p>
                  </div>
                </div>
        
                <div className={`market-badge ${skill.market_value?.toLowerCase()}`}>
                  {skill.market_value} Market Value
                </div>
        
              </div>
            ))}
        
          </div>
        
        </section>
        
        
        
        
        {/* ================= TRANSFORMATION ROADMAP ================= */}
        <section className="report-card">
        
          <h2>90-Day Income Transformation Plan</h2>
        
          <div className="timeline">
        
            {result?.ai_report["90_day_transition_plan"].map((step, i) => (
              <div className="timeline-step" key={i}>
                <div className="circle">{i + 1}</div>
                <div className="content">{step}</div>
              </div>
            ))}
        
          </div>
        
        </section>
        
        {/* ================= CV TRANSFORMATION ================= */}
        <section className="report-card cv-rewrite">
        
          <h2>CV Transformation (Before → After)</h2>
        
          <div className="cv-grid">
        
            <div>
              <h3>❌ Current Framing</h3>
              <ul>
                {result?.ai_report.cv_upgrade.problems.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </div>
        
            <div>
              <h3>🔥 Optimised CV Positioning</h3>
              <ul>
              {result?.ai_report.cv_upgrade.fixes.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
              </ul>
            </div>
        
          </div>
        
        </section>
        
        {/* ================= EXACT CV REWRITES (NEW HIGH VALUE) ================= */}
        <section className="report-card">
        
          <h2>Exact CV Rewrite (Copy These Lines)</h2>
        
          <div className="rewrite-box">
        
            <div className="before-after">
        
              <div>
                <h4>Before</h4>
                <p>Responsible for daily tasks in {result?.current_job}</p>
              </div>
        
              <div>
                <h4>After</h4>
                <p>
                  Delivered consistent operational performance contributing to
                  measurable efficiency improvements in a high-volume environment
                </p>
              </div>
        
            </div>
        
          </div>
        
        </section>
        
        {/* ================= NEGOTIATION ================= */}
        <section className="report-card negotiation">
        
          <h2>Salary Negotiation Script (Use This Exactly)</h2>
        
          <blockquote>
          {result?.ai_report.salary_increase_strategy.what_to_say}
        </blockquote>
        
          <p className="strategy">
          {
              result?.ai_report?.salary_increase_strategy?.strategy
            }
          </p>
        
        </section>
        
        {/* ================= APPLICATION STRATEGY ================= */}
        <section className="report-card">
        
          <h2>How To Get Interviews Faster</h2>
        
          <div className="grid-3">
        
            {result?.ai_report.application_strategy.map((item, i) => (
              <div key={i} className="card">
                {item}
              </div>
            ))}
        
          </div>
        
        </section>
        
        
        {/* ================= REAL JOB TITLES TO SEARCH ================= */}
        <section className="report-card">
        
          <h2>Top Job Titles You Should Search</h2>
        
          <div className="job-title-grid">
        
            {result?.ai_report.job_titles_to_search?.map((job, i) => (
              <div className="job-title-card" key={i}>
                🔎 {job}
              </div>
            ))}
        
          </div>
        
        </section>
        
        
        
        
        {/* ================= REALITY SHOCK ================= */}
        <section className="report-card danger-zone">
        
          <h2>What Happens If You Do Nothing</h2>
        
          <div className="future-grid">
        
            <div>
              <h3>1 Year</h3>
              <p>Minimal salary change, same role stagnation</p>
            </div>
        
            <div>
              <h3>3 Years</h3>
              <p>
              You are likely still earning close to {result?.current_salary}
              </p>
            </div>
        
            <div>
              <h3>Lost Income</h3>
              <p className="big-loss">
                {result?.ai_report.income_analysis.income_gap} × 3 years
              </p>
            </div>
        
          </div>
        
        </section>
        
        
        {/* ================= FASTEST SALARY PATH ================= */}
        <section className="report-card fastest-path">
        
          <h2>Fastest Salary Increase Path</h2>
        
          <div className="path-grid">
        
            <div className="path-card">
              <span>Best Method</span>
              <h3>
                {result?.ai_report.fastest_salary_path?.method}
              </h3>
            </div>
        
            <div className="path-card">
              <span>Estimated Timeline</span>
              <h3>
                {result?.ai_report.fastest_salary_path?.timeline}
              </h3>
            </div>
        
            <div className="path-card">
              <span>Difficulty Level</span>
              <h3>
                {result?.ai_report.fastest_salary_path?.difficulty}
              </h3>
            </div>
        
          </div>
        
        </section>
        
        
        
        {/* ================= FINAL TRANSFORMATION ================= */}
        <section className="report-card final-section">
        
          <h2>
            This Is Not About Effort.
            It's About Positioning.
          </h2>
        
          <div className="final-stats">
        
            <div>
              <span>Current Path</span>
              <p>{result?.ai_report.final_summary.current_path}</p>
            </div>
        
            <div>
              <span>Optimised Path</span>
              <p> {result?.ai_report?.final_summary?.optimized_path}</p>
            </div>
        
          </div>
        
          <h1 className="final-income">
          {result?.ai_report?.final_summary?.income_projection}
          </h1>
        
          <button className="cta">
            Start My Income Upgrade
          </button>
        
        </section>
        
        
        
        
        
        
        </div>
        
        </div>
    )
}

export default ReportView