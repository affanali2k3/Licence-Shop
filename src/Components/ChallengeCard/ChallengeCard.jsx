import React from "react";
import './ChallengeCard.css';

export const ChallengeCard = ({ cardImageUrl }) => {
    return (
        <div class="challenge-card">
            <img src={cardImageUrl} alt="" />
            <div class="card-content">
                <div>
                    <h3>Challenge 01</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <p></p>
            </div>
        </div>
    )
}