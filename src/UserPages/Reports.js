import React, { useState, useEffect } from "react";
import "../UserStyling/dashboard.css";
import axios from "axios";
import directory from "../directory";
import { useNavigate } from "react-router-dom";
import TimeAgo from "react-timeago";
import jsPDF from "jspdf";
import { useRef } from "react";
import ReportView from "../UserComponents/ReportView";




const Reports = () => {
  const [reports, setReports] = useState([]);
  const [user, setUser] = useState(null)
  const [latestRep, setLatestRep] = useState(null)
  const [result, setResult] = useState(null);
  const navigate = useNavigate();
  const reportRef = useRef(null);


  const AuthCheck = async () => {
    try{
        const res = await axios.get(`${directory}/auth-check`, {
            withCredentials: true,
            validateStatus: () => true, 
          });
    
          if (res.status === 200 && res.data.user) {
            setUser(res.data.user);
            navigate("/dashboard/reports");
          }else {
            navigate("/")
          }
    } catch (e) {
        console.log("An error occure while trying to perform an auth check", e)
    }
  }
  
  useEffect(() => {
    AuthCheck()
  }, []) 


  const getReports = async () => {
    try {
      const data = await axios.get(`${directory}/reports`, {
        withCredentials: true
      }) 
      const reportss = data.data.reports
      setLatestRep(reportss[0])
      setReports(reportss)
      
        setReports(reportss)
      
      

    } catch(e) {
      console.log("An error occured while tyring to get the reports", e)
    }
  }


 useEffect(() => {

  if(user) {
    getReports();
  }

}, [user]);





const downloadSpecificReport = async (report) => {
  if (!report) return;

  const doc = new jsPDF("p", "mm", "a4");

  // =====================================================
  // PAGE SETUP
  // =====================================================

  const PAGE_WIDTH = 210;
  const PAGE_HEIGHT = 297;

  const MARGIN = 16;
  const CONTENT_WIDTH = PAGE_WIDTH - MARGIN * 2;

  let y = 20;

  // =====================================================
  // COLORS
  // =====================================================

  const COLORS = {
    black: [15, 15, 20],
    text: [65, 65, 65],
    muted: [120, 120, 120],

    primary: [20, 20, 30],
    secondary: [88, 86, 214],

    green: [22, 163, 74],
    red: [220, 38, 38],
    blue: [59, 130, 246],
    orange: [249, 115, 22],

    white: [255, 255, 255],

    card: [250, 250, 252],
    soft: [245, 247, 250],

    border: [230, 230, 235],
  };

  // =====================================================
  // CLEAN TEXT
  // =====================================================

  const cleanText = (text) => {
    if (!text) return "";

    return String(text)
      .replace(/[\u200B-\u200D\uFEFF]/g, "")
      .replace(/[^\x20-\x7E€£¥₹.,:;!?()%&@\-–—/\n]/g, "")
      .replace(/\s+/g, " ")
      .trim();
  };

  // =====================================================
  // FONT SYSTEM
  // =====================================================

  const FONTS = {
    hero: 26,
    h1: 18,
    h2: 13,
    body: 10.5,
    small: 9,
    metric: 15,
  };

  // =====================================================
  // PAGE BREAK
  // =====================================================

  const checkPage = (spaceNeeded = 30) => {
    if (y + spaceNeeded > PAGE_HEIGHT - 18) {
      addFooter();

      doc.addPage();

      y = 20;
    }
  };

  // =====================================================
  // FOOTER
  // =====================================================

  const addFooter = () => {
    doc.setDrawColor(...COLORS.border);

    doc.line(
      MARGIN,
      PAGE_HEIGHT - 16,
      PAGE_WIDTH - MARGIN,
      PAGE_HEIGHT - 16
    );

    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);

    doc.setTextColor(...COLORS.muted);

    doc.text(
      "RiseVexa AI Career Intelligence Report",
      MARGIN,
      PAGE_HEIGHT - 10
    );

    doc.text(
      `${doc.getCurrentPageInfo().pageNumber}`,
      PAGE_WIDTH - MARGIN,
      PAGE_HEIGHT - 10,
      { align: "right" }
    );
  };

  // =====================================================
  // LOGO
  // =====================================================

  const logo = new Image();

  logo.src = `${process.env.PUBLIC_URL}/img/RiseVexa Logo.png`;

  await new Promise((resolve) => {
    logo.onload = resolve;
  });

  // =====================================================
  // TEXT BLOCK
  // =====================================================

  const addText = (
    text,
    {
      size = FONTS.body,
      bold = false,
      color = COLORS.text,
      lineHeight = 5.7,
      indent = 0,
      maxWidth = CONTENT_WIDTH - indent,
      spacingAfter = 5,
      align = "left",
    } = {}
  ) => {
    if (!text) return;

    const safeText = cleanText(text);

    doc.setFont(
      "helvetica",
      bold ? "bold" : "normal"
    );

    doc.setFontSize(size);

    doc.setTextColor(...color);

    const lines = doc.splitTextToSize(
      safeText,
      maxWidth
    );

    checkPage(lines.length * lineHeight + 10);

    doc.text(
      lines,
      MARGIN + indent,
      y,
      {
        align,
        maxWidth,
      }
    );

    y += lines.length * lineHeight + spacingAfter;
  };

  // =====================================================
  // SECTION HEADER
  // =====================================================

  const addSection = (title) => {
    checkPage(24);

    doc.setFillColor(...COLORS.primary);

    doc.roundedRect(
      MARGIN,
      y,
      CONTENT_WIDTH,
      11,
      3,
      3,
      "F"
    );

    doc.setFont("helvetica", "bold");

    doc.setFontSize(FONTS.h2);

    doc.setTextColor(...COLORS.white);

    doc.text(
      cleanText(title),
      MARGIN + 5,
      y + 7
    );

    y += 18;
  };

  // =====================================================
  // METRIC GRID CARD
  // =====================================================

  const addMetricCard = (
    label,
    value,
    accent = COLORS.secondary
  ) => {
    checkPage(34);

    const safeValue = cleanText(value || "N/A");

    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);

    const wrappedValue = doc.splitTextToSize(
      safeValue,
      CONTENT_WIDTH - 16
    );

    const cardHeight =
      Math.max(
        26,
        wrappedValue.length * 6 + 18
      );

    // SHADOW EFFECT
    doc.setFillColor(235, 235, 240);

    doc.roundedRect(
      MARGIN + 1,
      y + 1,
      CONTENT_WIDTH,
      cardHeight,
      4,
      4,
      "F"
    );

    // CARD
    doc.setFillColor(...COLORS.white);

    doc.roundedRect(
      MARGIN,
      y,
      CONTENT_WIDTH,
      cardHeight,
      4,
      4,
      "F"
    );

    // LEFT ACCENT
    doc.setFillColor(...accent);

    doc.roundedRect(
      MARGIN,
      y,
      4,
      cardHeight,
      4,
      4,
      "F"
    );

    // BORDER
    doc.setDrawColor(...COLORS.border);

    doc.roundedRect(
      MARGIN,
      y,
      CONTENT_WIDTH,
      cardHeight,
      4,
      4
    );

    // LABEL
    doc.setFont("helvetica", "normal");

    doc.setFontSize(9);

    doc.setTextColor(...COLORS.muted);

    doc.text(
      cleanText(label).toUpperCase(),
      MARGIN + 10,
      y + 8
    );

    // VALUE
    let dynamicFont = FONTS.metric;

    if (safeValue.length > 120) {
      dynamicFont = 10;
    } else if (safeValue.length > 80) {
      dynamicFont = 11;
    } else if (safeValue.length > 45) {
      dynamicFont = 12;
    }

    doc.setFont("helvetica", "bold");

    doc.setFontSize(dynamicFont);

    doc.setTextColor(...COLORS.black);

    doc.text(
      wrappedValue,
      MARGIN + 10,
      y + 17
    );

    y += cardHeight + 7;
  };

  // =====================================================
  // HERO STAT CARDS
  // =====================================================

  const addHeroStatRow = (
    items = []
  ) => {
    checkPage(45);

    const gap = 5;

    const cardWidth =
      (CONTENT_WIDTH - gap * 2) / 3;

    const cardHeight = 34;

    items.forEach((item, i) => {
      const x =
        MARGIN +
        i * (cardWidth + gap);

      // SHADOW
      doc.setFillColor(235, 235, 240);

      doc.roundedRect(
        x + 1,
        y + 1,
        cardWidth,
        cardHeight,
        4,
        4,
        "F"
      );

      // BG
      doc.setFillColor(...COLORS.white);

      doc.roundedRect(
        x,
        y,
        cardWidth,
        cardHeight,
        4,
        4,
        "F"
      );

      // TOP BAR
      doc.setFillColor(...item.color);

      doc.roundedRect(
        x,
        y,
        cardWidth,
        4,
        4,
        4,
        "F"
      );

      // LABEL
      doc.setFont("helvetica", "normal");

      doc.setFontSize(8);

      doc.setTextColor(...COLORS.muted);

      doc.text(
        cleanText(item.label),
        x + 4,
        y + 12
      );

      // VALUE
      let fontSize = 15;

      if (
        String(item.value).length > 18
      ) {
        fontSize = 11;
      }

      doc.setFont("helvetica", "bold");

      doc.setFontSize(fontSize);

      doc.setTextColor(...COLORS.black);

      const lines =
        doc.splitTextToSize(
          cleanText(item.value),
          cardWidth - 8
        );

      doc.text(
        lines,
        x + 4,
        y + 22
      );
    });

    y += 42;
  };

  // =====================================================
  // PROGRESS BAR
  // =====================================================

  const addProgressBar = (
    label,
    score = 75
  ) => {
    checkPage(24);

    const safeScore = Math.min(
      100,
      Math.max(
        0,
        Number(score) || 0
      )
    );

    addText(label, {
      bold: true,
      color: COLORS.black,
      spacingAfter: 3,
    });

    // BG
    doc.setFillColor(235, 235, 235);

    doc.roundedRect(
      MARGIN,
      y,
      145,
      7,
      3,
      3,
      "F"
    );

    // FILL
    let fillColor = COLORS.green;

    if (safeScore < 40)
      fillColor = COLORS.red;
    else if (safeScore < 70)
      fillColor = COLORS.orange;

    doc.setFillColor(...fillColor);

    doc.roundedRect(
      MARGIN,
      y,
      (145 * safeScore) / 100,
      7,
      3,
      3,
      "F"
    );

    // SCORE
    doc.setFont("helvetica", "bold");

    doc.setFontSize(10);

    doc.setTextColor(...COLORS.black);

    doc.text(
      `${safeScore}/100`,
      MARGIN + 152,
      y + 5
    );

    y += 16;
  };

  // =====================================================
  // LIST
  // =====================================================

  const addList = (
    items = [],
    color = COLORS.text
  ) => {
    if (!Array.isArray(items)) return;

    items.forEach((item) => {
      const lines =
        doc.splitTextToSize(
          `• ${cleanText(item)}`,
          CONTENT_WIDTH - 8
        );

      checkPage(
        lines.length * 5 + 8
      );

      doc.setFont(
        "helvetica",
        "normal"
      );

      doc.setFontSize(10.5);

      doc.setTextColor(...color);

      doc.text(
        lines,
        MARGIN + 4,
        y
      );

      y +=
        lines.length * 5.3 + 4;
    });

    y += 2;
  };

  // =====================================================
  // COMPARISON BOX
  // =====================================================

  const addComparisonBox = (
    leftTitle,
    leftItems,
    rightTitle,
    rightItems
  ) => {
    checkPage(65);

    const boxWidth = 84;

    const leftX = MARGIN;
    const rightX =
      PAGE_WIDTH -
      MARGIN -
      boxWidth;

    const boxHeight = 52;

    // LEFT
    doc.setFillColor(
      255,
      245,
      245
    );

    doc.roundedRect(
      leftX,
      y,
      boxWidth,
      boxHeight,
      4,
      4,
      "F"
    );

    // RIGHT
    doc.setFillColor(
      240,
      255,
      244
    );

    doc.roundedRect(
      rightX,
      y,
      boxWidth,
      boxHeight,
      4,
      4,
      "F"
    );

    // TITLES
    doc.setFont(
      "helvetica",
      "bold"
    );

    doc.setFontSize(10.5);

    doc.setTextColor(...COLORS.red);

    doc.text(
      leftTitle,
      leftX + 5,
      y + 8
    );

    doc.setTextColor(...COLORS.green);

    doc.text(
      rightTitle,
      rightX + 5,
      y + 8
    );

    // LEFT ITEMS
    let leftY = y + 16;

    doc.setFont(
      "helvetica",
      "normal"
    );

    doc.setFontSize(8.8);

    leftItems.forEach((item) => {
      const lines =
        doc.splitTextToSize(
          `• ${cleanText(item)}`,
          boxWidth - 10
        );

      doc.setTextColor(
        ...COLORS.text
      );

      doc.text(
        lines,
        leftX + 5,
        leftY
      );

      leftY +=
        lines.length * 4 + 3;
    });

    // RIGHT ITEMS
    let rightY = y + 16;

    rightItems.forEach((item) => {
      const lines =
        doc.splitTextToSize(
          `• ${cleanText(item)}`,
          boxWidth - 10
        );

      doc.text(
        lines,
        rightX + 5,
        rightY
      );

      rightY +=
        lines.length * 4 + 3;
    });

    y += boxHeight + 10;
  };

  // =====================================================
  // COVER PAGE
  // =====================================================

  // HERO BACKGROUND
  doc.setFillColor(...COLORS.primary);

  doc.rect(
    0,
    0,
    PAGE_WIDTH,
    82,
    "F"
  );

  // Decorative circle
  doc.setFillColor(
    255,
    255,
    255,
    0.04
  );

  doc.circle(185, 18, 30, "F");

  // LOGO
  doc.addImage(
    logo,
    "PNG",
    MARGIN,
    18,
    24,
    24
  );

  // BRAND
  doc.setFont("helvetica", "bold");

  doc.setFontSize(28);

  doc.setTextColor(...COLORS.white);

  doc.text("RiseVexa", 46, 32);

  doc.setFontSize(13);

  doc.setFont(
    "helvetica",
    "normal"
  );

  doc.text(
    "Career Income Optimization Report",
    46,
    41
  );

  // DATE
  doc.setFontSize(10);

  doc.setTextColor(
    220,
    220,
    220
  );

  doc.text(
    `Generated ${new Date().toLocaleDateString()}`,
    46,
    50
  );

  y = 100;

  // =====================================================
  // USER INTRO
  // =====================================================

  addText(
    `Prepared for ${user?.username || "User"}`,
    {
      size: 18,
      bold: true,
      color: COLORS.black,
      spacingAfter: 2,
    }
  );

  addText(
    "This report identifies your highest-probability income upgrade path based on current market positioning, transferable skills, recruiter psychology, and salary leverage opportunities.",
    {
      size: 10.5,
      color: COLORS.text,
      lineHeight: 5.5,
      spacingAfter: 12,
    }
  );

  // =====================================================
  // HERO STATS
  // =====================================================

  addHeroStatRow([
    {
      label: "Current Income",
      value: `€${report?.current_salary || "N/A"}`,
      color: COLORS.red,
    },

    {
      label: "Market Value",
      value:
        report?.ai_report
          ?.income_analysis
          ?.estimated_fair_salary ||
        "N/A",
      color: COLORS.blue,
    },

    {
      label: "Optimised Income",
      value:
        report?.ai_report
          ?.final_summary
          ?.income_projection ||
        "N/A",
      color: COLORS.green,
    },
  ]);

  addMetricCard(
    "Income Upgrade Potential",
    report?.ai_report
      ?.income_analysis
      ?.income_gap || "N/A",
    COLORS.secondary
  );

  // =====================================================
  // MARKET DEMAND
  // =====================================================

  addSection(
    "Market Demand Analysis"
  );

  addProgressBar(
    "Demand Score",
    report?.ai_report
      ?.market_demand?.score || 75
  );

  addText(
    report?.ai_report
      ?.market_demand
      ?.explanation
  );

  // =====================================================
  // RECRUITER VIEW
  // =====================================================

  addSection(
    "What Recruiters See vs Reality"
  );

  addComparisonBox(
    "Current Positioning",
    [
      "Job title interpreted as low-skill role",
      "No quantified achievements visible",
      "No industry repositioning",
      "Undervalued experience framing",
    ],
    "Optimised Positioning",
    [
      report?.ai_report
        ?.best_next_role
        ?.target_role ||
        "Higher-value positioning",
      "Transferable high-value skills highlighted",
      "Revenue-impact framing",
      "Salary band repositioned upward",
    ]
  );

  // =====================================================
  // BIGGEST INCOME LEAK
  // =====================================================

  addSection(
    "Biggest Income Leak"
  );

  addMetricCard(
    "Primary Limitation",
    report?.ai_report
      ?.biggest_income_leak ||
      "N/A",
    COLORS.red
  );

  // =====================================================
  // BEST ROLE
  // =====================================================

  addSection(
    "Best Income Move"
  );

  addMetricCard(
    "Recommended Role",
    report?.ai_report
      ?.best_next_role
      ?.target_role || "N/A",
    COLORS.secondary
  );

  addMetricCard(
    "Expected Salary Range",
    report?.ai_report
      ?.best_next_role
      ?.salary_range || "N/A",
    COLORS.blue
  );

  addMetricCard(
    "Expected Salary Increase",
    report?.ai_report
      ?.best_next_role
      ?.expected_salary_jump ||
      "N/A",
    COLORS.green
  );

  addText(
    report?.ai_report
      ?.best_next_role
      ?.reasoning
  );

  // =====================================================
  // SKILLS
  // =====================================================

  addSection(
    "Why You Already Qualify"
  );

  report?.ai_report?.transferable_skills_match?.forEach(
    (skill) => {
      addMetricCard(
        skill?.current_skill ||
          "Skill",
        `Transferable to ${skill?.maps_to || "N/A"}`,
        COLORS.secondary
      );

      addText(
        `Market Value: ${skill?.market_value || "N/A"}`,
        {
          bold: true,
          color: COLORS.green,
          spacingAfter: 8,
        }
      );
    }
  );

  // =====================================================
  // ROADMAP
  // =====================================================

  addSection(
    "90-Day Income Transformation Plan"
  );

  addList(
    report?.ai_report?.[
      "90_day_transition_plan"
    ] || []
  );

  // =====================================================
  // CV TRANSFORMATION
  // =====================================================

  addSection(
    "CV Transformation"
  );

  addText(
    "Current Framing",
    {
      bold: true,
      color: COLORS.red,
      size: 12,
      spacingAfter: 4,
    }
  );

  addList(
    report?.ai_report
      ?.cv_upgrade
      ?.problems || []
  );

  addText(
    "Optimised Positioning",
    {
      bold: true,
      color: COLORS.green,
      size: 12,
      spacingAfter: 4,
    }
  );

  addList(
    report?.ai_report
      ?.cv_upgrade
      ?.fixes || []
  );

  // =====================================================
  // EXACT CV REWRITE
  // =====================================================

  addSection(
    "Exact CV Rewrite"
  );

  addMetricCard(
    "Before",
    `Responsible for daily tasks in ${report?.current_job || "your role"}`,
    COLORS.red
  );

  addMetricCard(
    "After",
    "Delivered consistent operational performance contributing to measurable efficiency improvements in a high-volume environment.",
    COLORS.green
  );

  // =====================================================
  // NEGOTIATION
  // =====================================================

  addSection(
    "Salary Negotiation Strategy"
  );

  addMetricCard(
    "Use This Exactly",
    report?.ai_report
      ?.salary_increase_strategy
      ?.what_to_say || "N/A",
    COLORS.secondary
  );

  addText(
    report?.ai_report
      ?.salary_increase_strategy
      ?.strategy
  );

  // =====================================================
  // APPLICATION STRATEGY
  // =====================================================

  addSection(
    "How To Get Interviews Faster"
  );

  addList(
    report?.ai_report
      ?.application_strategy ||
      []
  );

  // =====================================================
  // JOB TITLES
  // =====================================================

  addSection(
    "Top Job Titles You Should Search"
  );

  addList(
    report?.ai_report
      ?.job_titles_to_search ||
      []
  );

  // =====================================================
  // FUTURE OUTLOOK
  // =====================================================

  addSection(
    "What Happens If You Do Nothing"
  );

  addMetricCard(
    "1 Year Outlook",
    "Minimal salary change and continued role stagnation.",
    COLORS.red
  );

  addMetricCard(
    "3 Year Outlook",
    `Likely still earning close to €${report?.current_salary || "N/A"}`,
    COLORS.red
  );

  addMetricCard(
    "Lost Income Potential",
    `${report?.ai_report?.income_analysis?.income_gap || "N/A"} over 3 years`,
    COLORS.red
  );

  // =====================================================
  // FASTEST PATH
  // =====================================================

  addSection(
    "Fastest Salary Increase Path"
  );

  addMetricCard(
    "Best Method",
    report?.ai_report
      ?.fastest_salary_path
      ?.method || "N/A",
    COLORS.secondary
  );

  addMetricCard(
    "Estimated Timeline",
    report?.ai_report
      ?.fastest_salary_path
      ?.timeline || "N/A",
    COLORS.blue
  );

  addMetricCard(
    "Difficulty Level",
    report?.ai_report
      ?.fastest_salary_path
      ?.difficulty || "N/A",
    COLORS.orange
  );

  // =====================================================
  // FINAL SUMMARY
  // =====================================================

  addSection(
    "Final Transformation"
  );

  addText(
    "This is not about effort. It's about positioning.",
    {
      size: 15,
      bold: true,
      color: COLORS.black,
      spacingAfter: 10,
    }
  );

  addMetricCard(
    "Current Path",
    report?.ai_report
      ?.final_summary
      ?.current_path || "N/A",
    COLORS.red
  );

  addMetricCard(
    "Optimised Path",
    report?.ai_report
      ?.final_summary
      ?.optimized_path ||
      "N/A",
    COLORS.blue
  );

  addMetricCard(
    "Final Income Projection",
    report?.ai_report
      ?.final_summary
      ?.income_projection ||
      "N/A",
    COLORS.green
  );

  // =====================================================
  // FINAL CTA SECTION
  // =====================================================

  checkPage(40);

  doc.setFillColor(...COLORS.primary);

  doc.roundedRect(
    MARGIN,
    y,
    CONTENT_WIDTH,
    32,
    5,
    5,
    "F"
  );

  doc.setFont(
    "helvetica",
    "bold"
  );

  doc.setFontSize(16);

  doc.setTextColor(...COLORS.white);

  doc.text(
    "Your income ceiling is now a positioning problem.",
    MARGIN + 8,
    y + 12
  );

  doc.setFont(
    "helvetica",
    "normal"
  );

  doc.setFontSize(10);

  doc.setTextColor(
    220,
    220,
    220
  );

  const closing =
    doc.splitTextToSize(
      "The market already pays significantly more for the skills you already possess. The next step is strategic repositioning.",
      CONTENT_WIDTH - 16
    );

  doc.text(
    closing,
    MARGIN + 8,
    y + 21
  );

  y += 42;

  // =====================================================
  // FOOTER
  // =====================================================

  addFooter();

  // =====================================================
  // SAVE
  // =====================================================

  doc.save(
    `RiseVexa-${report?.current_job || "Report"}.pdf`
  );
};

return (
  <div className="reports-page">
  
  <section className="reports-top">

<div className="reports-top-left">

  <span className="reports-mini-tag">
    RISEVEXA REPORT VAULT
  </span>

  <h1>
    Your Career Intelligence Reports
  </h1>

  <p>
    Every report contains a personalised income strategy,
    role transition roadmap and salary positioning analysis.
  </p>

</div>

<div className="reports-top-right">

  <div className="top-stat2">
    <span>Total Reports</span>
    <h2>
      {reports?.length}
    </h2>
  </div>


</div>

</section>
  
  {latestRep && (
    <section className="vx-card1 featured-report">
  
      <div className="card-top1">
  
        <div>
  
          <span className="small-label1">
            MOST RECENT REPORT
          </span>
  
          <h2>
          {latestRep?.current_job} → {latestRep?.target_role}
          </h2>
  
        </div>
  
        <div className="income-pill1">
        +{latestRep?.income_gap}
        </div>
  
      </div>
  
      <div className="vx-report-grid1">
  
        <div className="vx-report-box1">
          <span>Current Salary</span>
          <h3>€{latestRep?.current_salary}</h3>
        </div>
  
        <div className="vx-report-box1">
          <span>Projected Salary</span>
          <h3>{
          latestRep?.ai_report?.best_next_role
          ?.salary_range
        }</h3>
        </div>
  
        <div className="vx-report-box1">
          <span>Transition Timeline</span>
          <h3>
  {
    latestRep?.ai_report?.["90_day_transition_plan"]
      ? "3-6 Months"
      : "Unknown"
  }
</h3>
        </div>
  
        <div className="vx-report-box1">
      <span>Underpaid Status</span>

      <h3>
        {
          latestRep?.ai_report?.income_analysis
          ?.is_underpaid
          ? "YES"
          : "NO"
        }
      </h3>
    </div>
  
      </div>
  
      <div className="momentum-section1">
  
        <div className="momentum-item1 complete">
          ✓ CV Positioning
        </div>
  
        <div className="momentum-item1 complete">
          ✓ Career Path Identified
        </div>
  
        <div className="momentum-item1 pending">
          ⏳ Applications Needed
        </div>
  
        <div className="momentum-item1 pending">
          ⏳ Interview Positioning
        </div>

        
  
      </div>


  
      <div className="vx-actions1">
  
        <button onClick={() => setResult(latestRep)} className="vx-primary1">
          View Full Report
        </button>
  
        <button className="vx-secondary1">
          Regenerate Strategy
        </button>
  
      </div>

      <div className="report-user">
  Generated for <strong>{user?.username}</strong>
</div>
  
    </section>
  )}
    
  
  

    {result && (

<ReportView result={result} setResult={setResult} />

 
)}


    <section className="vx-card1">
  
      <div className="section-header1">
  
        <div>
          <span className="small-label1">
            REPORT HISTORY
          </span>
  
          <h2>Previous Income Upgrade Reports</h2>
        </div>
  
      </div>
  
      <div className="vx-history1">

        {reports.map((item) => (
          <div className="vx-history-item1">
  
          <div>
  
            <strong>
              {item?.current_job} → {item?.target_role}
            </strong>
  
            <span>
              +{item?.income_gap} Potential Increase
            </span>
  
          </div>
  
          <div className="history-right1">
  
            <small>Generated <TimeAgo date={item?.created_at} /> </small>
  
  <div>

            <button onClick={() => setResult(item)}>
              View
            </button>

            <button
  onClick={() => downloadSpecificReport(item)}
>
  Download PDF
</button>
  </div>
          </div>
  
        </div>  
        ))}



  {reports.length === 0 && (
  <div className="empty-reports">
    <h3>No Reports Yet</h3>
    <p>
      Generate your first AI income upgrade strategy.
    </p>
  </div>
)}
      
  
  
      </div>
  
    </section>
  
  </div>
  )
}
export default Reports