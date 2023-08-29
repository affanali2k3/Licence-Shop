import React from "react";
import './ChallengesDisplayHome.css';
import card1 from './images/card1.png'
import card2 from './images/card2.png'

export const ChallengesDisplayHome = () => {
    return (
        <div className="read-listen-watch-main-block">
            <h1>Read. Listen. Watch</h1>
            <div className="blog-podcast-video">
                <div className="image-container">
                    <img src={card1} alt="" />
                    <div className="text-overlay">
                        <p>Courses</p>
                    </div>
                </div>
                <div className="image-container">
                    <img src={card2} alt="" />
                    <div className="text-overlay">
                        <p>Challenges</p>
                    </div>
                </div>
            </div>
        </div>
    )
}