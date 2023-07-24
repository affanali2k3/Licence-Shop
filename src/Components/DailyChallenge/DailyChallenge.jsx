import React from 'react'
import './DailyChallenge.css'

export const DailyChallenge = () => {
    return (
        <div className="daily-challenge-card-div">
            <div className="day-and-challenge">
                <div className="starting-block"></div>
                <div className='content'>
                    <h3>Day 01:</h3>
                    <p>Guide on how to Become a Real Estate Agent</p>
                </div>
            </div>
            <div className="description">
                <h4>Starting from Scratch</h4>
                <p>We will guide you on how to start your career in Real Estate from scratch. Be a certified and licensed Real Estate Agent even if you have zero knowledge in this industry. We will be discussing how to obtain the real estate license and your motivation to switch to this career.</p>

            </div>
        </div>
    )
}
