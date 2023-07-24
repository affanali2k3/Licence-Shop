import React from "react";
import './ChallengesDisplay.css';
import { ChallengeCard } from "../ChallengeCard/ChallengeCard";
import card1 from './challenges/card1.png'
import card2 from './challenges/card2.png'
import card from './challenges/card.png'
import card4 from './challenges/card4.png'

export const ChallengesDisplay = () => {
    return (
        <div className="challenges-display-align-div">
            <ChallengeCard cardImageUrl={card1}></ChallengeCard>
            <ChallengeCard cardImageUrl={card2}></ChallengeCard>
            <ChallengeCard cardImageUrl={card}></ChallengeCard>
            <ChallengeCard cardImageUrl={card4}></ChallengeCard>
        </div>
    )
}