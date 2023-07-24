import React from "react";
import { TopBar } from '../Components/TopBar/TopBar'
import { FirstPage } from '../Components/FirstPage/FirstPage';
import { SecondPage } from '../Components/SecondPage/SecondPage';
import challengesPageBackground from '../images/challenges-background.png'
import { GuaranteeSuccess } from "../Components/GuaranteeSuccess/GuaranteeSuccess";
import { ChallengesDisplay } from "../Components/ChallengesDisplay/ChallengesDisplay";

export const Challenges = () => {
    return (
        <>
            <TopBar></TopBar>
            <FirstPage backgroundImageUrl={challengesPageBackground} mainTitle={'Challenges'}></FirstPage>
            <SecondPage></SecondPage>
            <GuaranteeSuccess></GuaranteeSuccess>
            <ChallengesDisplay></ChallengesDisplay>
        </>
    )
}