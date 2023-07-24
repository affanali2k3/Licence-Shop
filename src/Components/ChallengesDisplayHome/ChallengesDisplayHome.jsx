import React from "react";
import './ChallengesDisplayHome.css';
import { ChallengeCard } from "../ChallengeCard/ChallengeCard";
import card1 from './images/card1.png'
import card2 from './images/card2.png'

export const ChallengesDisplayHome = () => {
    return (
        <div className="challenges-home-display-align-div">
            <ChallengeCard cardImageUrl={card1}></ChallengeCard>
            <ChallengeCard cardImageUrl={card2}></ChallengeCard>
        </div>
    )
}