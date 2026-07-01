import React, { useEffect, useState } from "react";
import "../FrontStyling/logSign.css"
import Bar from "../FrontElements/Bar.js";
import Navbar from "../FrontElements/Navbar.js";
import Footer from "../FrontElements/Footer.js";
import axios from "axios";
import directory from "../directory";
import { Link, useNavigate } from "react-router-dom"
import { GoogleLogin } from '@react-oauth/google';
import { ToastContainer, toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";


const LogIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false);
    const [user, setUser] = useState(null)

    useEffect(() => {
      const authCheck = async () => {
        try {
          const res = await axios.get(`${directory}/auth-check`, {
            withCredentials: true,
            validateStatus: () => true, // 👈 prevent Axios from throwing on 401
          });
    
          if (res.status === 200 && res.data.user) {
            setUser(res.data.user);
            navigate("/dashboard");
          } else {
            setUser(null);
          }
        } catch (e) {
          console.error("Unexpected network or server error during auth check", e);
        }
      };
    
      authCheck();
    }, []);



    const signIn = async (e) => {
      if (e) e.preventDefault();
        try {
            if(!email || !password) {
                alert("You have not filled in all details")
            }


            const res = await axios.post(
              `${directory}/log-in`,
              { email, password }, 
              { withCredentials: true}
          )
          navigate("/dashboard")
        } catch(e) {
            console.log("An error occured while trying to signIn", e)


            if (e.response?.data?.error) {
              toast.error(e.response.data.error);
            } else {
              toast.error("Something went wrong");
            }
        }
    }

    return (
        <div>

<ToastContainer
  position="top-right"
  autoClose={3000}
  theme="dark"
/>

            <Bar />
            <Navbar />

            <section class="login-section">
  <div class="login-bg"></div>

  <div class="login-wrapper">

    <div class="login-left">
      <h1>RiseVexa</h1>
      <p>
        Unlock your income potential.
        Get your career upgrade path in minutes.
      </p>

    </div>

    <div class="login-right">

      <div class="login-card">

        <h2>Welcome back</h2>
        <p>Sign in to continue your career upgrade</p>

        <form onSubmit={signIn}>
          <input type="email"
           placeholder="Email address"
           onChange={(e) => setEmail(e.target.value)}
           value={email}
           />


          <div className="password-field">
          <input 
        type={showPassword ? "text" : "password"}
           placeholder="Password"
           onChange={(e) => setPassword(e.target.value)}
           value={password}
           />
             { showPassword ? <FaEye className="eye two" onClick={() => setShowPassword(!showPassword)} style={{ color: "gray" }}/> :
         <FaEyeSlash className="eye two" onClick={() => setShowPassword(!showPassword)}/> }
         </div>





          <button type="submit">Sign In</button>
        </form>

        <div class="login-meta two">
          <span>Don't have an account? Create one <Link to={"/sign-up"}>here</Link></span>
        </div>

        <div class="login-meta">
          <span>Forgot password?</span>
          <span>Create account</span>
        </div>

        <GoogleLogin
      onSuccess={async (credentialResponse) => {
        const token = credentialResponse.credential;

        const res = await axios.post(
          `${directory}/auth/google`,
          { token },
          { withCredentials: true }
        );

        navigate("/dashboard")
      }}
      onError={() => {
        console.log("Login Failed");
      }}
    />

      </div>

    </div>
    
   

  </div>
</section>

            <Footer />
        </div>
    )
}
export default LogIn