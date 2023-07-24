import React from 'react'
import { DailyChallenge } from '../DailyChallenge/DailyChallenge'
import './DailyChallengeHolder.css'

export const DailyChallengeHolder = () => {
    return (
        <div className="daily-challenge-holder-div">
            <DailyChallenge></DailyChallenge>
            <DailyChallenge></DailyChallenge>
            <DailyChallenge></DailyChallenge>
            <DailyChallenge></DailyChallenge>
        </div>
    )
}
