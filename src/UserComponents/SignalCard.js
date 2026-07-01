import React from "react";
import "../UserStyling/dashboard.css"
import "../UserStyling/ReportView.css"
 


const SignalCard = ({title,value})=>{

    return(
    
    <div className="signal-card">
    
    <h4>{title}</h4>
    
    <p>{value}</p>
    
    </div>
    
    )
    
    }
    export default SignalCard