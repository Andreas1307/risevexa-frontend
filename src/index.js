import React from 'react';
import ReactDOM from 'react-dom/client';
import Homepage from './FrontPages/homepage';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HowItWorks from './FrontPages/HowItWorks';
import SuccessStories from './FrontPages/SuccessStories';
import Pricing from './FrontElements/Pricing';
import PricingPage from './FrontPages/PricingPage';
import LogIn from './FrontPages/LogIn';
import SignUp from './FrontPages/SignUp';
import Dashboard from './UserPages/Dashboard';
import NewAnalysis from './UserPages/NewStyling';
import Reports from './UserPages/Reports';
import HelpSupport from './UserPages/HelpSupport';
import PrivacyPolicy from './FrontPages/PrivacyPolicy';
import TermsOfService from './FrontPages/TermsOfService';




import { GoogleOAuthProvider } from '@react-oauth/google';
import RefundPolicy from './FrontPages/RefundPolicy';

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