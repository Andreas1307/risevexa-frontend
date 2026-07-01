import React from "react";
import "../UserStyling/dashboard.css"
import "../UserStyling/ReportView.css"




const ScoreCard = ({ title, score }) => {

    return (

        <div className="score-card">

            <div className="mini-score">

                {score}

            </div>

            <h4>{title}</h4>

            <div className="mini-bar">

                <div
                    className="mini-progress"
                    style={{ width: `${score}%` }}
                />

            </div>

        </div>

    );

};
export default ScoreCard