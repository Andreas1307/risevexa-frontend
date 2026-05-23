import React from 'react';
import ReactDOM from 'react-dom/client';
import Homepage from './FrontPages/homepage.js';
import reportWebVitals from './reportWebVitals.js';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HowItWorks from './FrontPages/HowItWorks.js';
import SuccessStories from './FrontPages/SuccessStories.js';
import PricingPage from './FrontPages/PricingPage.js';
import LogIn from './FrontPages/LogIn.js';
import SignUp from './FrontPages/SignUp.js';
import Dashboard from './UserPages/Dashboard.js';
import NewAnalysis from './UserPages/NewStyling.js';
import Reports from './UserPages/Reports.js';
import HelpSupport from './UserPages/HelpSupport.js';
import PrivacyPolicy from './FrontPages/PrivacyPolicy.js';
import TermsOfService from './FrontPages/TermsOfService.js';




import { GoogleOAuthProvider } from '@react-oauth/google';
import RefundPolicy from './FrontPages/RefundPolicy.js';

const router = createBrowserRouter([
  {
    path: "*",
    element: <Homepage />
  },
  {
    path: "/",
    element: <Homepage />
  },
  {
    path: "/how-it-works",
    element: <HowItWorks />
  },
  {
    path: "/success-stories",
    element: <SuccessStories />
  },
  {
    path: "/pricing",
    element: <PricingPage />
  },
  {
    path: "/log-in",
    element: <LogIn />
  },
  {
    path: "/sign-up",
    element: <SignUp />
  },
  {
    path: "/privacy-policy",
    element: <PrivacyPolicy />
  },
  {
    path: "/terms-of-service",
    element: <TermsOfService />
  },
  {
    path: "/refund-policy",
    element: <RefundPolicy />
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      { index: true, element: <NewAnalysis /> },
      { path: "reports", element: <Reports /> },
      { path: "help", element: <HelpSupport /> }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="1038647336479-1an1i2olodsck27pqog760kfis9cnav9.apps.googleusercontent.com">
      <RouterProvider router={router} />
    </GoogleOAuthProvider>
  </React.StrictMode>
);

reportWebVitals();