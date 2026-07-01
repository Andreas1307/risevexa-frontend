import React, {useState, useEffect, useRef } from "react";
import "../UserStyling/dashboard.css"
import { FaTimes } from "react-icons/fa";
import axios from "axios";
import directory from "../directory.js";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import ReportView from "../UserComponents/ReportView.js";



const NewAnalysis = () => {

  const [currentJob, setCurrentJob] = useState("")
  const [yearsExperience, setYearsExperience] = useState("")
  const [currentSalary, setCurrentSalary] = useState("")
  const [wishJob, setWishJob] = useState("")
  const [cv, setCv] = useState("")
  const [qualifications, setQualifications] = useState("")
  const [user, setUser] = useState(null)
  const [result, setResult] = useState(null);
  const [result2, setResult2] = useState(null);
  const [loading, setLoading] = useState(false);
  const [unlocked, setUnlocked] = useState(false);

  const [step, setStep] = useState("form"); 
  const [insertedId, setInsertedId] = useState(null);
  const [reportId, setReportId] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();

  const trackEvent = (event, data = {}) => {
    const wait = setInterval(() => {
      if (window.fbq) {
        window.fbq('track', event, data);
        clearInterval(wait);
      }
    }, 200);
  };


  useEffect(() => {
    const interval = setInterval(() => {
      if (window.fbq) {
        window.fbq('track', 'ViewContent');
        clearInterval(interval);
      }
    }, 500);
  
    return () => clearInterval(interval);
  }, []);

  const hasGeneratedReport = useRef(false);

  useEffect(() => {
      const newId = searchParams.get("data_id");
      const sessionId = searchParams.get("session_id");
  
      if (!sessionId) return;
  
      let attempts = 0;
  
      const interval = setInterval(async () => {
          attempts++;
  
          // If a request is already running or complete, stop immediately
          if (hasGeneratedReport.current) {
              clearInterval(interval);
              return;
          }
  
          const success = await verifyPayment(sessionId, newId);
  
          if (success) {
              clearInterval(interval);
          }
  
          if (attempts >= 10) {
              clearInterval(interval);
              toast.error("Payment verification timed out");
          }
      }, 3000);
  
      return () => clearInterval(interval);
  }, []);

  const handleCheckout = async () => {
    try {
      const res = await axios.post(
        `${directory}/create-checkout-session`, { insertedId },
        {
          withCredentials: true
        }
      )
  
      if (window.fbq) {
        window.fbq('track', 'InitiateCheckout');
      }
  
      window.location.href = res.data.url;
  
    } catch (err) {
      console.log("Stripe error:", err);
      toast.error("An error occured");
    }
  };
  

  const verifyPayment = async (sessionId, newId) => {

    try {
  
      const res = await axios.get(
        `${directory}/verify-payment`,
        {
          params: { sessionId },
          withCredentials: true
        }
      );
  
     if (res.data.paid) {

      if (hasGeneratedReport.current) return true;
      
      // 2. Lock it down instantly before hitting the await barrier
      hasGeneratedReport.current = true;

      if (window.fbq) {
        trackEvent('Purchase', {
  value: 15,
  currency: 'EUR',
  content_name: 'RiseVexa Report'
});
      }
  await generateFullReport(newId);

  return true;
}

return false;
  
    } catch (err) {
  
      console.log(err);
  
      toast.error("Verification failed");
    }
  };



  const generateFullReport = async (newId) => {

    if (loading) return;
  
    try {
      setLoading(true);
      setStep("loading");
  
      const res = await axios.post(`${directory}/send-user-data`, {
        newId
      }, { withCredentials: true });
      console.log("Response from send-user-data:", res.data);
      setResult(res.data.report)
      setStep("form");
    } catch(e) {
      console.log("Error:", e);
      setError(e.response?.data?.error || e.message);
      toast.error("An error occured");
  }
}

  
  

/*
  const getFullReport = async (id) => {
    try {
      const loggedUser = await AuthCheck(); // ✅ WAIT

      console.log("Inside GETFULLREPORT", id)
      const res = await axios.get(
        `${directory}/get-report`,
       {
        params: {
          id: id   // ✅ SEND USER ID HERE
        },
        withCredentials: true,
      }
    );

      setCurrentSalary(res.data.current_salary)
      setCurrentJob(res.data.current_job)
  
      setResult(res.data)
  
    } catch(err){
      console.log(err);
      toast.error("An error occured");
    }
  };
  */

const AuthCheck = async () => {
  try{
      const res = await axios.get(`${directory}/auth-check`, {
          withCredentials: true,
          validateStatus: () => true, 
        });
  
        if (res.status === 200 && res.data.user) {
          setUser(res.data.user);
          return res.data.user;
        // navigate("/dashboard");
        }else {
          navigate("/")
        }
  } catch (e) {
      console.log("An error occure while trying to perform an auth check", e)
  
      toast.error("An error occured");
    }
}

useEffect(() => {
  AuthCheck()
}, [])

const sendUserData = async () => {

  if (loading) return;

  if (
    !currentJob?.trim() ||
    !yearsExperience ||
    !currentSalary ||
    !cv?.trim() ||
    !user?.id
  ) {
    toast.error("Please fill in all fields");
    return;
  }



  if(cv.trim().length < 80) {
    toast.error("Cv is too short");
    return
  }


  if (Number(currentSalary) <= 0) {
    toast.error("Invalid current salary");
    return;
  }

  try {
    setLoading(true);
    setStep("loading");

    const res = await axios.post(`${directory}/generate-preview`, {
      currentJob,
      yearsExperience,
      currentSalary,
      wishJob,
      cv,
      qualifications
    }, { withCredentials: true });

   setResult2(res.data.preview);
   setInsertedId(res.data.insertedId);
  //  setReportId(res.data.reportId);
console.log("Response from generate-preview:", res.data);
    setStep("preview");
  } catch(e) {
    console.log("Error:", e);
    setError(e.response?.data?.error || e.message);
    
    toast.error("An error occured");
    setStep("form");
  } finally {
    setLoading(false);
  }
}


const loadingSteps = [
  "Analyzing salary positioning...",
  "Mapping transferable skills...",
  "Comparing EU market compensation...",
  "Detecting income gaps...",
  "Building transition strategy...",
  "Generating negotiation insights...",
  "Finalizing career upgrade report..."
];

const [loadingIndex, setLoadingIndex] = useState(0);

useEffect(() => {
  if(step !== "loading") return;

  const interval = setInterval(() => {
    setLoadingIndex((prev) => {
      if(prev < loadingSteps.length - 1){
        return prev + 1;
      }
      return prev;
    });
  }, 2200);

  return () => clearInterval(interval);

}, [step]);



    return (
<div>

  
<ToastContainer
  position="top-right"
  autoClose={3000}
  theme="dark"
/>


<section className="vx-analysis-shell">

  {/* ================= HERO ================= */}
  <div className="vx-analysis-header">

    <span className="vx-analysis-tag">
      AI CAREER POSITIONING ENGINE
    </span>

    <h1>
      Your Job Title Is Not Your Value —
      <span> It’s Your Mispricing Signal</span>
    </h1>

    <p>
      We analyse how your experience is currently positioned in the market,
      and identify higher-paying roles where your skills are already in demand.
    </p>

    {/* ================= CREDIBILITY STRIP ================= */}
    <div className="vx-analysis-stats">

<div className="vx-stat">
  <strong>AI-Powered</strong>
  <span>Career Analysis</span>
</div>

<div className="vx-stat">
  <strong>CV + Salary</strong>
  <span>Positioning Insights</span>
</div>

<div className="vx-stat">
  <strong>Instant</strong>
  <span>Income Strategy Report</span>
</div>

</div>
  </div>


  {/* ================= MAIN GRID ================= */}
  <div className="vx-analysis-grid">

    {/* FORM SIDE */}
    <div className="vx-analysis-form">

      <div className="vx-form-head">

        <h3>Career Positioning Report</h3>

        <p>
          Takes under 60 seconds. This is not a CV review —
          it’s a market-value recalibration.
        </p>

      </div>

      <input
        value={currentJob}
        onChange={(e) => setCurrentJob(e.target.value)}
        placeholder="Current job role"
      />

      <input
        value={yearsExperience}
        onChange={(e) => setYearsExperience(e.target.value)}
        placeholder="Years of experience"
      />

      <input
        value={currentSalary}
        onChange={(e) => setCurrentSalary(e.target.value)}
        placeholder="Current salary (€) per year"
      />

      <input
        value={wishJob}
        onChange={(e) => setWishJob(e.target.value)}
        placeholder="Target role (optional)"
      />

      <textarea
      className="vx-cv-textarea"
        value={cv}
        onChange={(e) => setCv(e.target.value)}
        placeholder="Paste your CV or describe what you do"
      />
      <span className="vx-cv-note">Your CV is analyzed to personalize your report and is not saved in our database.</span>

      <textarea
      className="vx-qualifications-textarea"
        value={qualifications}
        onChange={(e) => setQualifications(e.target.value)}
        placeholder="Qualifications (optional)"
      />


      <button
        onClick={() => sendUserData()}
        disabled={loading}
        className="vx-generate-btn"
      >
        {loading ? "Analyzing Market Position..." : "Generate My Income Report for €0.00"}
      </button>

      <small className="vx-secure-note">
        🔒 Secure payment • No subscription • Instant results
      </small>

    </div>


    {/* ================= RIGHT SIDE PREVIEW (IMPORTANT ADDITION) ================= */}
    <div className="vx-analysis-preview2">

      <div className="vx-preview-card2">

        <span className="vx-preview-tag2">
        REAL MARKET COMPARISON
        </span>

        <h4>
          Mechanic → High-Demand Technical Specialist
        </h4>

        <div className="vx-preview-salary2">
          +€18,000–€32,000 potential uplift
        </div>

        <p>
          Similar profiles with 5–10 years experience in technical roles
          are being repositioned into higher-paying industrial and engineering pathways.
        </p>

      </div>


      <div className="vx-preview-bullets2">

        <div>✔ Hidden transferable skills detected</div>
        <div>✔ Undervalued job positioning identified</div>
        <div>✔ Higher-paying role matches found</div>

      </div>

    </div>

  </div>



  {/* 
  <div className="vx-why-section">

  <h2>
    Why this identifies income opportunities others miss
  </h2>

  <div className="vx-why-grid">

    <div className="vx-why-card">
      <h4>Market-based positioning</h4>

      <p>
        We compare your profile against real hiring data across EU roles.
      </p>
    </div>

    <div className="vx-why-card">
      <h4>Skill translation</h4>

      <p>
        Your experience is mapped to higher-value job categories.
      </p>
    </div>

    <div className="vx-why-card">
      <h4>Salary realism engine</h4>

      <p>
        We only show transitions that actually exist in the job market.
      </p>
    </div>

  </div>

</div>*/}


<div className="vx-proof-strip">

  <div>
    <strong>1,000+</strong>
    <span>career analyses completed</span>
  </div>

  <div>
    <strong>€18K+</strong>
    <span>average identified salary gap</span>
  </div>

  <div>
    <strong>4.8/5</strong>
    <span>user satisfaction</span>
  </div>

</div>

</section>



{result && (

  <ReportView result={result} setResult={setResult}/>

 
)}



{step === "loading" && (
  <div className="vx-loading-screen">

    <div className="vx-spinner" />

    <h2>{loadingSteps[loadingIndex]}</h2>

    <p>
  Mapping your experience to higher-paying roles in the EU job market...
</p>

    <div className="vx-loading-progress">
      <div
        className="vx-loading-bar"
        style={{
          width: `${((loadingIndex + 1) / loadingSteps.length) * 100}%`
        }}
      />
    </div>

  </div>
)}



{step === "preview" && result2 && (

  <div className="preview">
  <div className="vx-preview-lock">

    <h2>Your Career Report is Ready</h2>
<span className="closePayment" onClick={() => setStep("form")}><FaTimes /></span>
    <div className="vx-preview-grid">

      {/* SHOW THIS */}
      <div className="vx-preview-box">
        <h3>Income Gap</h3>
       <p>{result2.income_analysis.income_gap}</p>
      </div>

      {/* LOCK THIS */}
      <div className="vx-preview-box blur">
        <h3>Estimated Fair Salary</h3>
        <p>🔒 Locked</p>
      </div>

      {/* SHOW THIS */}
      <div className="vx-preview-box">
        <h3>Best Next Role</h3>
     <p>{result2.best_next_role.target_role}</p>
      </div>

      {/* LOCK THIS */}
      <div className="vx-preview-box blur">
        <h3>Expected Salary Jump</h3>
        <p>🔒 Locked</p>
      </div>

      {/* LOCK THIS */}
      <div className="vx-preview-box blur">
        <h3>90 Day Plan</h3>
        <p>🔒 Locked</p>
      </div>

      {/* SHOW THIS */}
      <div className="vx-preview-box">
        <h3>Optimized Path</h3>
       <p>{result2.final_summary.optimized_path}</p>
      </div>

    </div>

    <button
      className="vx-unlock-btn offerrr"
      onClick={handleCheckout}
    >
      🔒 Unlock Full Report – <span className="vx-pricee vx-offer">€14.99</span> <span className="vx-new-offer">€0.00</span>
    </button>

  </div>
  </div>
)}




{error && (
  <div className="error-box">
    {error}
  </div>
)}


</div>
    )
}

export default NewAnalysis