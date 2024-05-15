import React from 'react'
import { NavLink } from "react-router-dom";
function Feedback_Home() {
    return (
        <section className="section-services">
            <div className="container">
                <h1 className="main-heading">Feedback</h1>
            </div>

            <div className="container grid grid-three-cols">
                <div className="card">
                    <div className="card-img">
                        <img src="design.png" alt="our service info" width="200" />
                    </div>
                    <div className="card-details">
                    <NavLink to="/FeedbackForm"> <h2>Feedback</h2> </NavLink>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Feedback_Home
