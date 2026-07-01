import React from "react";
import "../UserStyling/dashboard.css"
import "../UserStyling/ReportView.css"
import { useRef } from "react";
import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ScoreCard from "./ScoreCard";
import SignalCard from "./SignalCard";


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

    <div className="overall-score">

        <div className="score-circle">

            <svg viewBox="0 0 120 120">

                <circle
                    className="track"
                    cx="60"
                    cy="60"
                    r="52"
                />

                <circle
                    className="progress"
                    cx="60"
                    cy="60"
                    r="52"
                    strokeDasharray={327}
                    strokeDashoffset={
                        327 -
                        (327 *
                            result.career_scorecard.overall_score) /
                            100
                    }
                />

            </svg>

            <div className="score-number">

                {result.career_scorecard.overall_score}

            </div>

        </div>

        <h1>Career Scorecard</h1>

        <p>

            Your experience is stronger than your current positioning.
            This report identifies where recruiters see opportunity,
            where your CV is holding you back, and what will have the
            biggest impact on your earning potential.

        </p>

    </div>

    <div className="score-grid">

        <ScoreCard
            title="Recruiter Impression"
            score={result.career_scorecard.recruiter_impression}
        />

        <ScoreCard
            title="Salary Positioning"
            score={result.career_scorecard.salary_positioning}
        />

        <ScoreCard
            title="ATS Compatibility"
            score={result.career_scorecard.ats_compatibility}
        />

        <ScoreCard
            title="Leadership Signal"
            score={result.career_scorecard.leadership_signal}
        />

        <ScoreCard
            title="Promotion Readiness"
            score={result.career_scorecard.promotion_readiness}
        />

        <ScoreCard
            title="Interview Readiness"
            score={result.career_scorecard.interview_readiness}
        />

        <ScoreCard
            title="Transition Readiness"
            score={result.career_scorecard.transition_readiness}
        />

        <ScoreCard
            title="CV Strength"
            score={result.career_scorecard.cv_strength}
        />

    </div>

</section>
        
<section className="report-card recruiter-card">

<div className="report-header2">

    <div>

        <span className="section-tag2">
            Recruiter Analysis
        </span>

        <h2>Recruiter Snapshot</h2>

        <p>
            This is how a recruiter is likely to interpret your CV
            within the first 15–30 seconds.
        </p>

    </div>

    <div
        className={`decision-badge ${
            result.recruiter_snapshot.recruiter_decision.toLowerCase()
        }`}
    >
        {result.recruiter_snapshot.recruiter_decision}
    </div>

</div>


<div className="snapshot-grid">

    <div className="snapshot-info">

        <div>

            <span>Current Role</span>

            <strong>
                {result.recruiter_snapshot.current_role_detected}
            </strong>

        </div>

        <div>

            <span>Seniority</span>

            <strong>
                {result.recruiter_snapshot.estimated_seniority_level}
            </strong>

        </div>

        <div>

            <span>Experience</span>

            <strong>
                {result.recruiter_snapshot.experience_level}
            </strong>

        </div>

        <div>

            <span>Industry</span>

            <strong>
                {result.recruiter_snapshot.main_industry_detected}
            </strong>

        </div>

    </div>


    <div className="recruiter-summary">

        <h3>Overall Recruiter Impression</h3>

        <p>
            {result.recruiter_snapshot.overall_recruiter_impression}
        </p>

    </div>

</div>



<div className="strengths-section">

    <div className="strength-box">

        <h3>Top Strengths</h3>

        <ul>

            {result.recruiter_snapshot.top_strengths.map((item,index)=>(

                <li key={index}>
                    ✓ {item}
                </li>

            ))}

        </ul>

    </div>


    <div className="weakness-box">

        <h3>Biggest Weakness</h3>

        <p>

            {result.recruiter_snapshot.biggest_weakness}

        </p>

    </div>

</div>


<div className="score-footer">

    <div>

        <span>First Impression</span>

        <strong>

            {result.recruiter_snapshot.first_impression_score}/100

        </strong>

    </div>

    <div>

        <span>Analysis Confidence</span>

        <strong>

            {result.recruiter_snapshot.confidence_level}%

        </strong>

    </div>

</div>


<div className="final-summary">

    <h3>Recruiter Verdict</h3>

    <p>

        {result.recruiter_snapshot.recruiter_summary}

    </p>

</div>

</section>
        
<section className="report-card positioning-card">

<div className="report-header2">

    <div>

        <span className="section-tag2">
            Positioning Analysis
        </span>

        <h2>Why Recruiters Position You Here</h2>

        <p>

            Recruiters don't just evaluate experience —
            they evaluate how clearly your value is presented.

        </p>

    </div>

</div>


<div className="positioning-top">

    <div className="position-box">

        <span>Current Positioning</span>

        <p>

            {result.positioning_analysis.current_market_positioning}

        </p>

    </div>


    <div className="position-box good">

        <span>Desired Positioning</span>

        <p>

            {result.positioning_analysis.desired_positioning}

        </p>

    </div>

</div>


<div className="gap-card">

    <h3>Biggest Positioning Gap</h3>

    <p>

        {result.positioning_analysis.biggest_positioning_gap}

    </p>

</div>


<div className="analysis-columns">

    <div className="analysis-box">

        <h3>Top Positioning Issues</h3>

        <ul>

            {result.positioning_analysis.top_5_positioning_issues.map((item,index)=>(

                <li key={index}>⚠ {item}</li>

            ))}

        </ul>

    </div>


    <div className="analysis-box strengths">

        <h3>Hidden Strengths</h3>

        <ul>

            {result.positioning_analysis.top_3_hidden_strengths.map((item,index)=>(

                <li key={index}>✓ {item}</li>

            ))}

        </ul>

    </div>

</div>


<div className="signal-grid">

    <SignalCard
        title="Leadership"
        value={result.positioning_analysis.leadership_signal}
    />

    <SignalCard
        title="Commercial"
        value={result.positioning_analysis.commercial_signal}
    />

    <SignalCard
        title="Strategic"
        value={result.positioning_analysis.strategic_signal}
    />

    <SignalCard
        title="Technical"
        value={result.positioning_analysis.technical_signal}
    />

    <SignalCard
        title="Communication"
        value={result.positioning_analysis.communication_signal}
    />

</div>


<div className="evidence-card">

    <h3>Evidence From Your CV</h3>

    <p>

        {result.positioning_analysis.evidence_from_cv_supporting_conclusions}

    </p>

</div>


<div className="impact-card">

    <h3>Highest Impact Improvement</h3>

    <p>

        {result.positioning_analysis.highest_impact_improvement}

    </p>

</div>

</section>

<section className="report-card salary-card">

    <div className="report-header2">

        <div>

            <span className="section-tag2">
                Salary Positioning
            </span>

            <h2>Your Income Potential</h2>

            <p>

                This analysis compares your current salary with
                your estimated market value based on your
                experience, positioning and career profile.

            </p>

        </div>

    </div>


    <div className="salary-top-grid">

        <div className="salary-stat">

            <span>Current Salary</span>

            <strong>

                {result.salary_positioning.current_salary}

            </strong>

        </div>

        <div className="salary-stat">

            <span>Estimated Market Value</span>

            <strong>

                {result.salary_positioning.estimated_market_value}

            </strong>

        </div>

        <div className="salary-stat highlight2">

            <span>Optimised Market Value</span>

            <strong>

                {result.salary_positioning.optimised_market_value}

            </strong>

        </div>

    </div>



    <div className="salary-gap-card">

        <div>

            <span>Estimated Salary Gap</span>

            <h1>

                {result.salary_positioning.estimated_salary_gap}

            </h1>

            <p>Potential additional annual earnings.</p>

        </div>

    </div>



    <div className="projection-grid">

        <div className="projection-card">

            <span>Current Salary</span>

            <strong>

                {result.salary_positioning.current_salary}

            </strong>

        </div>

        <div className="projection-arrow">

            →

        </div>

        <div className="projection-card">

            <span>12 Month Projection</span>

            <strong>

                {result.salary_positioning.realistic_12_month_projection}

            </strong>

        </div>

        <div className="projection-arrow">

            →

        </div>

        <div className="projection-card highlight2">

            <span>3 Year Projection</span>

            <strong>

                {result.salary_positioning.realistic_3_year_projection}

            </strong>

        </div>

    </div>



    <div className="salary-details">

        <div className="detail-card">

            <h3>Market Salary Range</h3>

            <p>

                {result.salary_positioning.market_salary_range}

            </p>

        </div>

        <div className="detail-card">

            <h3>Confidence</h3>

            <p>

                {result.salary_positioning.salary_confidence}

            </p>

        </div>

    </div>



    <div className="reason-card">

        <h3>

            Why You're Currently Below Market

        </h3>

        <p>

            {result.salary_positioning.main_reason_salary_is_below_market}

        </p>

    </div>



    <div className="opportunity-card">

        <h3>

            Biggest Income Opportunity

        </h3>

        <p>

            {result.salary_positioning.salary_improvement_potential}

        </p>

    </div>

</section>

<section className="report-card">


<div className="report-header2">
  <div>
 <h2>Career Matches</h2>

    <p className="section-description">
        Based on your experience, achievements and transferable skills,
        these are the roles where you have the highest probability of
        increasing your income over the next 12–24 months.
    </p>

  </div>
   
    </div>

    <div className="career-match-container">

        {result.career_match.map((career,index)=>(

            <div
                className={`career-match-card ${
                    index===0 ? "best-match" : ""
                }`}
                key={index}
            >

                {index===0 &&

                    <div className="best-match-badge">

                        ⭐ Best Opportunity

                    </div>

                }

                <div className="career-top">

                    <div>

                        <h3>{career.job_title}</h3>

                        <span className="career-salary">

                            {career.salary_range}

                        </span>

                    </div>

                    <div className="match-score">

                        <span>{career.match_percentage}%</span>

                        <small>Match</small>

                    </div>

                </div>


                <div className="career-progress">

                    <div
                        className="career-progress-fill"
                        style={{
                            width:`${career.match_percentage}%`
                        }}
                    />

                </div>


                <div className="career-section">

                    <h4>Why this role fits you</h4>

                    <p>{career.why_it_matches}</p>

                </div>


                <div className="career-columns">

                    <div className="career-box success">

                        <h4>Transferable Experience</h4>

                        <ul>

                            {career.experience_that_transfers.map((item,i)=>(

                                <li key={i}>
                                    ✓ {item}
                                </li>

                            ))}

                        </ul>

                    </div>


                    <div className="career-box warning2">

                        <h4>Skills Still Missing</h4>

                        <ul>

                            {career.missing_requirements.map((item,i)=>(

                                <li key={i}>
                                    • {item}
                                </li>

                            ))}

                        </ul>

                    </div>

                </div>


                <div className="career-footer">

                    <div>

                        <span>
                            Transition Difficulty
                        </span>

                        <strong>
                            {career.estimated_transition_difficulty}
                        </strong>

                    </div>

                    <div>

                        <span>
                            Estimated Timeline
                        </span>

                        <strong>
                            {career.estimated_timeline}
                        </strong>

                    </div>

                </div>

            </div>

        ))}

    </div>

</section>

<section className="report-card">

<div className="report-header2">

<div>
    <h2>Recruiter Risks</h2>

    <p className="section-description">
        Every CV contains strengths, but recruiters are trained to notice
        potential concerns within seconds. These are the areas most likely
        to reduce your chances of being shortlisted.
    </p>
    </div>
    </div>

    <div className="recruiter-risks-container">

        {result.recruiter_risks.map((risk,index)=>(

            <div
                className="risk-card"
                key={index}
            >

                <div className="risk-left">

                    <div className={`impact-badge ${risk.impact.toLowerCase()}`}>

                        {risk.impact}

                    </div>

                </div>

                <div className="risk-right">

                    <div className="risk-section">

                        <span className="risk-label">
                            Recruiter Concern
                        </span>

                        <h3>{risk.risk}</h3>

                    </div>

                    <div className="risk-grid">

                        <div className="risk-box why">

                            <h4>
                                👀 Why Recruiters Notice
                            </h4>

                            <p>
                                {risk.why_recruiter_notices_it}
                            </p>

                        </div>

                        <div className="risk-box solution">

                            <h4>
                                ✅ Recommended Fix
                            </h4>

                            <p>
                                {risk.fix}
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        ))}

    </div>

</section>

<section className="report-card">

<h2 className="atsTitle">ATS Compatibility Analysis</h2>

<div className="ats-dashboard">

<div className="ats-score-grid">

<div className="ats-score-card">

<h3>Overall ATS Score</h3>

<div className="ats-circle">

<span>
{result?.ats_analysis?.overall_ats_score}%
</span>

</div>

</div>

<div className="ats-score-card">

<h3>Keyword Coverage</h3>

<div className="ats-circle">

<span>
{result?.ats_analysis?.keyword_coverage_percentage}%
</span>

</div>

</div>

</div>

<div className="ats-status-grid">

<div className="ats-status-card">

<h3>Section Structure</h3>

<p>

{result?.ats_analysis?.section_structure}

</p>

</div>

<div className="ats-status-card">

<h3>Readability</h3>

<p>

{result?.ats_analysis?.readability}

</p>

</div>

<div className="ats-status-card">

<h3>Skills Coverage</h3>

<p>

{result?.ats_analysis?.skills_coverage}

</p>

</div>

</div>

<div className="keyword-columns">

<div className="keyword-box">

<h3>Strong Keywords</h3>

<div className="keyword-list">

{result?.ats_analysis?.strong_keywords?.map((word,index)=>(

<span
key={index}
className="keyword good-keyword"
>

{word}

</span>

))}

</div>

</div>

<div className="keyword-box">

<h3>Missing Keywords</h3>

<div className="keyword-list">

{result?.ats_analysis?.missing_keywords?.map((word,index)=>(

<span
key={index}
className="keyword bad-keyword"
>

{word}

</span>

))}

</div>

</div>

</div>

<div className="formatting-box">

<h3>Formatting Issues</h3>

<ul>

{result?.ats_analysis?.formatting_issues?.map((issue,index)=>(

<li key={index}>{issue}</li>

))}

</ul>

</div>

<div className="vocabulary-section">

<h3>Vocabulary Optimisation</h3>

{result?.ats_analysis?.vocabulary_optimizations?.map((item,index)=>(

<div
className="vocab-card"
key={index}
>

<div className="weak-side">

<h4>Weak Phrase</h4>

<p>{item.weak_phrase}</p>

</div>

<div className="arrow two">

↓

</div>

<div className="better-side">

<h4>Better Alternatives</h4>

<ul>

{item.suggested_replacements.map((replacement,i)=>(

<li key={i}>{replacement}</li>

))}

</ul>

</div>

</div>

))}

</div>

</div>

</section>

<section className="report-card">


<div className="report-header2">

<div>
  <h2>Promotion Readiness</h2>

  <p className="section-description">
    Based on your current experience, CV and market positioning, this analysis
    estimates how prepared you are for promotion into your next career level.
  </p>
</div>
</div>
  <div className="promotion-header">

    <div className="promotion-circle">

      <svg viewBox="0 0 120 120">

        <circle
          className="circle-bg"
          cx="60"
          cy="60"
          r="52"
        />

        <circle
          className="circle-progress"
          cx="60"
          cy="60"
          r="52"
          strokeDasharray="327"
          strokeDashoffset={
            327 -
            (327 *
              result.promotion_readiness
                .overall_promotion_readiness_percentage) /
              100
          }
        />

      </svg>

      <div className="circle-text">

        <span>
          {
            result.promotion_readiness
              .overall_promotion_readiness_percentage
          }%
        </span>

        <small>Ready</small>

      </div>

    </div>

    <div className="promotion-summary">

      <div className="promotion-route">

        <div>

          <label>Current Role</label>

          <h3>
            {result.promotion_readiness.current_role}
          </h3>

        </div>

        <div className="promotion-arrow">

          →

        </div>

        <div>

          <label>Next Level</label>

          <h3>
            {result.promotion_readiness.next_level}
          </h3>

        </div>

      </div>

      <div className="promotion-timeline">

        Estimated Promotion Timeline

        <strong>
          {result.promotion_readiness
            .estimated_promotion_timeline}
        </strong>

      </div>

    </div>

  </div>

  <div className="promotion-skills">

    <div>

      <span>Leadership</span>

      <div className="progress">

        <div
          style={{
            width: `${result.promotion_readiness.leadership_readiness_percentage}%`
          }}
        />

      </div>

      <strong>
        {
          result.promotion_readiness
            .leadership_readiness_percentage
        }%
      </strong>

    </div>

    <div>

      <span>Commercial</span>

      <div className="progress">

        <div
          style={{
            width: `${result.promotion_readiness.commercial_readiness_percentage}%`
          }}
        />

      </div>

      <strong>
        {
          result.promotion_readiness
            .commercial_readiness_percentage
        }%
      </strong>

    </div>

    <div>

      <span>Management</span>

      <div className="progress">

        <div
          style={{
            width: `${result.promotion_readiness.management_readiness_percentage}%`
          }}
        />

      </div>

      <strong>
        {
          result.promotion_readiness
            .management_readiness_percentage
        }%
      </strong>

    </div>

    <div>

      <span>Strategic</span>

      <div className="progress">

        <div
          style={{
            width: `${result.promotion_readiness.strategic_readiness_percentage}%`
          }}
        />

      </div>

      <strong>
        {
          result.promotion_readiness
            .strategic_readiness_percentage
        }%
      </strong>

    </div>

  </div>

  <div className="promotion-warning">

    <h3>🚧 What's Holding You Back?</h3>

    <p>
      {
        result.promotion_readiness
          .what_is_preventing_promotion
      }
    </p>

  </div>

  <div className="promotion-actions">

    <h3>Top Priorities</h3>

    <div className="promotion-action-grid">

      {result.promotion_readiness.top_5_things_to_improve.map(
        (item, index) => (

          <div
            key={index}
            className="promotion-action-card"
          >

            <div className="action-number">

              {index + 1}

            </div>

            <p>{item}</p>

          </div>

        )
      )}

    </div>

  </div>

</section>

<section className="report-card">



<div className="report-header2">

<div>

<h2>Interview Readiness</h2>

<p className="section-description">
This assessment predicts how prepared you are for a competitive interview based
on your CV, experience and the information you've provided.
</p>
</div>
</div>

<div className="interview-dashboard">

<div className="interview-score-card">

<div className="interview-score-ring">

<svg viewBox="0 0 120 120">

<circle
className="interview-ring-bg"
cx="60"
cy="60"
r="52"
/>

<circle
className="interview-ring-progress"
cx="60"
cy="60"
r="52"
strokeDasharray="327"
strokeDashoffset={
327-(327*result.interview_readiness.readiness_score)/100
}
/>


</svg>

<div className="interview-score-text">

<h1>
{result.interview_readiness.readiness_score}%
</h1>

<span>Interview Ready</span>

</div>

</div>

</div>

<div className="interview-big-risk">

<h3>⚠ Biggest Interview Risk</h3>

<p>
{result.interview_readiness.biggest_interview_risk}
</p>

</div>

</div>

<div className="interview-strength-grid">

<div className="interview-column success">

<h3>You'll likely perform well discussing</h3>

{result.interview_readiness.strong_interview_topics.map((item,index)=>(

<div
className="interview-pill success"
key={index}
>

✓ {item}

</div>

))}

</div>

<div className="interview-column danger">

<h3>Recruiters may challenge you on</h3>

{result.interview_readiness.weak_interview_topics.map((item,index)=>(

<div
className="interview-pill danger"
key={index}
>

⚠ {item}

</div>

))}

</div>

</div>

<div className="interview-middle-grid">

<div className="interview-panel">

<h3>Confidence Areas</h3>

{result.interview_readiness.confidence_areas.map((item,index)=>(

<div
key={index}
className="confidence-card"
>

⭐ {item}

</div>

))}

</div>

<div className="interview-panel">

<h3>Stories Missing From Your CV</h3>

{result.interview_readiness.stories_missing_from_cv.map((item,index)=>(

<div
key={index}
className="story-card2"
>

📖 {item}

</div>

))}

</div>

</div>

<div className="interview-analysis-grid">

<div className="analysis-panel">

<h3>Likely Weak Answers</h3>

{result.interview_readiness.likely_weak_answers.map((item,index)=>(

<div
key={index}
className="analysis-card"
>

<h4>{item.topic_or_question_theme}</h4>

<p>{item.why_it_fails}</p>

</div>

))}

</div>

<div className="analysis-panel">

<h3>STAR Examples Missing</h3>

{result.interview_readiness.star_examples_missing.map((item,index)=>(

<div
key={index}
className="analysis-card"
>

<h4>{item.situation_context}</h4>

<p>{item.missing_metric_or_outcome}</p>

</div>

))}

</div>

</div>

<div className="interview-preparation">

<h3>Topics You Should Prepare Before Your Next Interview</h3>

<div className="prep-grid">

{result.interview_readiness.topics_to_prepare.map((item,index)=>(

<div
key={index}
className="prep-card"
>

<div className="prep-number">

{index+1}

</div>

<p>{item}</p>

</div>

))}

</div>

</div>

</section>

<section className="report-card">

    <h2 className="atsTitle">Mock Interview</h2>

    <div className="mockInterviewGrid">

        {result.mock_interview.map((item,index)=>(

            <div
                key={index}
                className="mockInterviewCard"
            >

                <div className="mockInterviewHeader">

                    <span className="mockQuestionNo">
                        Q{index+1}
                    </span>

                    <h3>
                        {item.question}
                    </h3>

                </div>

                <div className="mockTwoColumn">

                    <div>

                        <label>Why they're asking</label>

                        <p>
                            {item.why_interviewer_asks_it}
                        </p>

                    </div>

                    <div>

                        <label>Framework</label>

                        <p>
                            {item.strong_answer_framework}
                        </p>

                    </div>

                </div>

                <div className="mockSkills">

                    {item.what_they_re_testing.map((skill,i)=>(

                        <span
                            key={i}
                            className="mockSkill"
                        >
                            {skill}
                        </span>

                    ))}

                </div>

                <div className="mockMistakes">

                    {item.mistakes_to_avoid.map((mistake,i)=>(

                        <span
                            key={i}
                            className="mockMistake"
                        >
                            ✕ {mistake}
                        </span>

                    ))}

                </div>

                <div className="mockAnswerBox">

                    <strong>Example Answer</strong>

                    <p>

                        {item.example_answer_based_on_user_cv}

                    </p>

                </div>

            </div>

        ))}

    </div>

</section>

<section className="report-card">

    <h2 className="atsTitle">CV Rewrite & Optimisation</h2>

    <div className="cvRewriteWrapper">

        <div className="cvHero">

            <div className="cvHeroCard">

                <span>Professional Headline</span>

                <h3>
                    {result.cv_rewrite.professional_headline}
                </h3>

            </div>

            <div className="cvHeroCard">

                <span>Professional Summary</span>

                <p>
                    {result.cv_rewrite.professional_summary}
                </p>

            </div>

        </div>

        <div className="cvBulletSection">

            <h3>Top CV Improvements</h3>

            {result.cv_rewrite.top_5_rewritten_bullet_points.map((item,index)=>(

                <div
                    key={index}
                    className="cvBulletCard"
                >

                    <div className="cvBefore">


                        <p>
                            {item.original_context}
                        </p>

                    </div>

                    <div className="cvArrow">

                        ➜

                    </div>

                    <div className="cvAfter">

                        <p>
                            {item.rewritten_bullet}
                        </p>

                        <small>

                            {item.impact_justification}

                        </small>

                    </div>

                </div>

            ))}

        </div>

    

        <div className="linkedinCard">

            <h3>LinkedIn Optimisation</h3>

            <div className="linkedinHeadline">

                {result.cv_rewrite.linkedin_headline}

            </div>

            <div className="linkedinAbout">

                {result.cv_rewrite.linkedin_about_section}

            </div>

        </div>

    </div>

</section>

<section className="report-card">

    <h2>Salary Negotiation Strategy</h2>

    <div className="negotiationWrapper">

        <div className="negotiationTop">

            <div className="negotiationStatus">

                <span>Negotiation Status</span>

                <h3>

                    {result.negotiation_strategy.can_negotiate
                        ? "Ready To Negotiate"
                        : "Not Recommended Yet"}

                </h3>

            </div>

            <div className="salaryTargets">

                <div>

                    <small>Ideal Target</small>

                    <h4>{result.negotiation_strategy.ideal_salary_target}</h4>

                </div>

                <div>

                    <small>Minimum</small>

                    <h4>{result.negotiation_strategy.minimum_acceptable_salary}</h4>

                </div>

                <div>

                    <small>Maximum Realistic</small>

                    <h4>{result.negotiation_strategy.maximum_realistic_salary}</h4>

                </div>

            </div>

        </div>

        <div className="leverageCard">

            <h3>Your Negotiation Leverage</h3>

            <p>

                {result.negotiation_strategy.negotiation_leverage}

            </p>

        </div>

        <div className="negotiationGrid">

            <div className="negotiationList">

                <h3>Evidence To Mention</h3>

                {result.negotiation_strategy.evidence_to_mention.map((item,index)=>(

                    <div
                        key={index}
                        className="evidenceItem"
                    >
                        ✓ {item}
                    </div>

                ))}

            </div>

            <div className="negotiationList">

                <h3>Achievements To Mention</h3>

                {result.negotiation_strategy.achievements_to_mention.map((item,index)=>(

                    <div
                        key={index}
                        className="achievementItem"
                    >
                        ★ {item}
                    </div>

                ))}

            </div>

        </div>

        <div className="scriptSection">

            <h3>Negotiation Conversation</h3>

            <div className="chatBubble left">

                <span>When You Receive The Offer</span>

                <p>

                    {result.negotiation_strategy.negotiation_script.initial_offer_response}

                </p>

            </div>

            <div className="chatBubble right">

                <span>Counter Offer</span>

                <p>

                    {result.negotiation_strategy.negotiation_script.counter_offer_phrasing}

                </p>

            </div>

            <div className="chatBubble left">

                <span>If They Push Back</span>

                <p>

                    {result.negotiation_strategy.negotiation_script.handling_pushback}

                </p>

            </div>

        </div>

        <div className="dontSayCard">

            <h3>Things Never To Say</h3>

            {result.negotiation_strategy.things_not_to_say.map((item,index)=>(

                <div
                    key={index}
                    className="dontSayItem"
                >
                    {item}
                </div>

            ))}

        </div>

    </div>

</section>

<section className="report-card">

    <h2 className="atsTitle">Your Career Transition Roadmap</h2>

    <div className="transitionDashboard">

        <div className="transitionHero">

            <div className="transitionCurrent">

                <span>Destination</span>

                <h3>{result.transition_plan.target_role}</h3>

            </div>

            <div className="transitionTimeline">

                <span>Estimated Timeline</span>

                <h3>{result.transition_plan.estimated_timeline}</h3>

            </div>

            <div className="transitionDifficulty">

                <span>Difficulty</span>

                <h3>{result.transition_plan.transition_difficulty}</h3>

            </div>

            <div className="transitionConfidence">

                <span>Success Confidence</span>

                <div className="confidenceCircle">

                    {result.transition_plan.confidence_level}%

                </div>

            </div>

        </div>

        <div className="firstPriorityCard">

            <span>FIRST PRIORITY</span>

            <h3>

                {result.transition_plan.first_priority}

            </h3>

        </div>

        <div className="careerRoadmap">

            {result.transition_plan.milestones.map((step,index)=>(

                <div
                    className="roadmapStep"
                    key={index}
                >

                    <div className="roadmapNumber">

                        {index+1}

                    </div>

                    <div className="roadmapContent">

                        <div className="roadmapHeader">

                            <h3>{step.phase}</h3>

                            <span>{step.timeframe}</span>

                        </div>

                        <p className="roadmapObjective">

                            {step.objective}

                        </p>

                        <div className="roadmapActions">

                            {step.actions.map((action,i)=>(

                                <div
                                    className="roadmapAction"
                                    key={i}
                                >

                                    ✓ {action}

                                </div>

                            ))}

                        </div>

                        <div className="roadmapOutcome">

                            <strong>Expected Outcome</strong>

                            <p>

                                {step.expected_outcome}

                            </p>

                        </div>

                    </div>

                </div>

            ))}

        </div>

        <div className="transitionBottomGrid">

            <div className="transitionWarning">

                <h3>Biggest Obstacle</h3>

                <p>

                    {result.transition_plan.biggest_obstacle}

                </p>

            </div>

            <div className="transitionSolution">

                <h3>How To Overcome It</h3>

                <p>

                    {result.transition_plan.how_to_overcome}

                </p>

            </div>

        </div>

        <div className="transitionSuccess">

            <div className="transitionDates">

                <div>

                    <small>First Interview</small>

                    <h3>

                        {result.transition_plan.estimated_first_interview}

                    </h3>

                </div>

                <div>

                    <small>Job Offer</small>

                    <h3>

                        {result.transition_plan.estimated_job_offer}

                    </h3>

                </div>

            </div>

            <div className="successIndicators">

                <h3>Success Indicators</h3>

                <div className="successList">

                    {result.transition_plan.success_indicators.map((item,index)=>(

                        <div
                            key={index}
                            className="successItem"
                        >

                            ✓ {item}

                        </div>

                    ))}

                </div>

            </div>

        </div>

    </div>

</section>
        
<section className="report-card">

<h2 className="atsTitle">Your Job Search Blueprint</h2>

<div className="jobBlueprint">

<div className="jobBlueprintHero">

<div className="weeklyMission">

<span>Weekly Mission</span>

<h3>{result.job_search_strategy.application_target_per_week}</h3>

<p>Applications Per Week</p>

</div>

<div className="workModel">

<span>Recommended Working Style</span>

<h3>

{result.job_search_strategy.remote_hybrid_office_recommendation.model}

</h3>

<p>

{result.job_search_strategy.remote_hybrid_office_recommendation.justification}

</p>

</div>

</div>

<div className="jobGrid">

<div className="blueprintCard">

<h3>Best Industries</h3>

{result.job_search_strategy.best_industries.map((item,index)=>(

<div key={index} className="blueprintPill">

{item}

</div>

))}

</div>

<div className="blueprintCard">

<h3>Best Company Sizes</h3>

{result.job_search_strategy.best_company_sizes.map((item,index)=>(

<div key={index} className="blueprintPill">

{item}

</div>

))}

</div>

<div className="blueprintCard">

<h3>Top Companies</h3>

{result.job_search_strategy.top_companies_to_target.map((item,index)=>(

<div key={index} className="companyTile">

🏢 {item}

</div>

))}

</div>

<div className="blueprintCard">

<h3>Best Job Boards</h3>

{result.job_search_strategy.best_job_boards.map((item,index)=>(

<div key={index} className="boardTile">

{item}

</div>

))}

</div>

</div>

<div className="jobTitlesSection">

<h3>Recommended Job Titles</h3>

<div className="titleCloud">

{result.job_search_strategy.job_titles_to_search.map((item,index)=>(

<div key={index} className="jobTitleTag">

{item}

</div>

))}

</div>

</div>

<div className="linkedinSearchCard">

<h3>LinkedIn Search Formula</h3>

{result.job_search_strategy.linkedin_search_suggestions.map((item,index)=>(

<div key={index} className="linkedinFormula">

<code>{item.search_string}</code>

<p>{item.purpose}</p>

</div>

))}

</div>

<div className="networkCard">

<h3>Networking Strategy</h3>

{result.job_search_strategy.networking_suggestions.map((item,index)=>(

<div key={index} className="networkPerson">

<div>

<span>Reach Out To</span>

<h4>{item.target_persona}</h4>

</div>

<p>{item.outreach_strategy}</p>

</div>

))}

</div>

<div className="priorityRoadmap">

<h3>Execution Order</h3>

{result.job_search_strategy.priority_order.map((item,index)=>(

<div className="priorityStep" key={index}>

<div className="priorityNumber">

{item.phase_number}

</div>

<div>

<h4>{item.focus_action}</h4>

<p>{item.strategic_importance}</p>

</div>

</div>

))}

</div>

</div>

</section>
        
        
        
     
        
        
        
        
        
        </div>
        
        </div>
    )
}

export default ReportView