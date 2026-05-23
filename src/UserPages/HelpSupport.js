import React, {useState, useEffect } from "react";
import "../UserStyling/dashboard.css"
import axios from "axios";
import directory from "../directory";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";



const HelpSupport = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [issueType, setIssueType] = useState("")
    const [issue, setIssue] = useState("")
    const [user, setUser] = useState(null)
    const navigate = useNavigate();


    const AuthCheck = async () => {
        try{
            const res = await axios.get(`${directory}/auth-check`, {
                withCredentials: true,
                validateStatus: () => true, 
              });
        
              if (res.status === 200 && res.data.user) {
                setUser(res.data.user);
              // navigate("/dashboard");
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

    const sendRequest = async () => {

        if (
            !name.trim() ||
            !email.trim() ||
            !issueType.trim() ||
            issueType === "Choose Issue Type" ||
            !issue.trim()
        ) {
            toast.error("Please fill in all fields");
            return;
        }
    
        try {
            const send = await axios.post(`${directory}/send-support-request`, 
                {
                    name, 
                    email, 
                    issueType,
                    issue,
                    userId: user?.id
                }, { withCredentials: true }
            )

            setName("")
            setEmail("")
            setIssueType("")
            setIssue("")
            toast.success("Support request sent successfully!");
        } catch (e) {
            console.log("An error occured while trying to send the request", e)
            toast.error("Failed to send support request");
        }
    }


    return (


<div className="vx-support-shell">

<ToastContainer
  position="top-right"
  autoClose={3000}
  theme="dark"
/>

  <div className="vx-support-hero">

    <span className="vx-support-tag">
      SUPPORT CENTER
    </span>

    <h1>
      Need Help?
      <span> We’re Here For You.</span>
    </h1>

    <p>
      Get fast support for payments, reports, account access, career analysis issues,
      or general questions about your income upgrade journey.
    </p>

  </div>


  <div className="vx-support-grid">

    <div className="vx-support-left">

      <div className="vx-support-card">

        <h2>Contact Support</h2>

        <p>
          Our support team usually replies within 2–12 hours.
        </p>

        <input 
        type="text" 
        placeholder="Full Name" 
        value={name}
        onChange={(e) => setName(e.target.value)}
        />

        <input 
        type="email" 
        placeholder="Email Address" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />

        <select 
        value={issueType}
        onChange={(e) => setIssueType(e.target.value)}
        >
          <option>Choose Issue Type</option>
          <option>Payment Problem</option>
          <option>Report Access</option>
          <option>Account Support</option>
          <option>Refund Request</option>
          <option>General Question</option>
        </select>

        <textarea
        value={issue}
        onChange={(e) => setIssue(e.target.value)}
          placeholder="Describe your issue or question"
        ></textarea>

        <button onClick={() => sendRequest()}> 
          Send Support Request
        </button>

      </div>

    </div>
    </div>


    <div className="vx-support-right">

      <div className="vx-help-box">

        <h3>Frequently Asked Questions</h3>

        <div className="vx-faq-item">
          <h4>How long does report generation take?</h4>
          <p>
            Most reports are generated instantly after analysis.
          </p>
        </div>

        <div className="vx-faq-item">
          <h4>I paid but cannot access my report</h4>
          <p>
            Contact support with your payment email and we’ll unlock it immediately.
          </p>
        </div>
</div>
</div>
</div>

    )
}

export default HelpSupport