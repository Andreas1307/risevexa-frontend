import React, { useState, useEffect } from "react";
import "../FrontStyling/logSign.css"
import Bar from "../FrontElements/Bar";
import Navbar from "../FrontElements/Navbar";
import Footer from "../FrontElements/Footer";
import axios from "axios";
import directory from "../directory";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from '@react-oauth/google';

import { ToastContainer, toast } from "react-toastify";

const SignUp = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const navigate = useNavigate();
    const [user, setUser] = useState(null)


    useEffect(() => {
      const authCheck = async () => {
        try {
          const res = await axios.get(`${directory}/auth-check`, {
            withCredentials: true,
            validateStatus: () => true,
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



    

    const Register = async () => {
        try {
          if (!email || !password || !username) {
            toast.error("Please fill in all details");
            return;
          }

            if(password.length < 8) {
              toast.error("Password is too short");
              return
            }

            await axios.post(
              `${directory}/register`, 
              { username, email, password},
                { withCredentials: true}
            )
            navigate("/dashboard")
        } catch(e) {
            console.log("An error occured while trying to signUp", e)

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

            <section class="signup-section">
  <div class="signup-container">

    <div class="signup-left">
      <h1>Start Your Income Upgrade</h1>
      <p>
        Upload your CV and instantly see how to move into a higher-paying role.
      </p>

      <div class="benefits">
        <div>Real salary gap analysis</div>
        <div>Best next job path</div>
        <div>Step-by-step transition plan</div>
        <div>CV + interview strategy</div>
      </div>
    </div>

    <div class="signup-right">
      <div class="form-card">

        <h2>Create Your Report</h2>

        <input type="text" 
        placeholder="Username" 
        onChange={(e) => setUsername(e.target.value)}
        value={username}
        />
        <input type="email" 
        placeholder="Email Address" 
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        />
        <input type="password"
         placeholder="Password" 
         onChange={(e) => setPassword(e.target.value)}
         value={password}
         />

        <button onClick={() => Register()}>Create My Income Plan</button>

        <p>One-time access • Instant analysis</p>



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

export default SignUp