import React from "react";
import { TopBar } from '../Components/TopBar/TopBar'
import { FirstPage } from '../Components/FirstPage/FirstPage';
import { SecondPage } from '../Components/SecondPage/SecondPage';
import { DailyChallengeHolder } from '../Components/DailyChallengeHolder/DailyChallengeHolder'
import challengesPageBackground from '../images/challenges-background.png';
import { ChallengeIntro } from "../Components/ChallengeIntro/ChallengeIntro";
import { Footer } from "../Components/Footer/Footer";
import { NewsLetter } from "../Components/NewsLetter/NewsLetter";

export const SingleChallenge = () => {
    return (
        <>
            <TopBar></TopBar>
            <FirstPage backgroundImageUrl={challengesPageBackground} mainTitle={'Challenge 01'}></FirstPage>
            <SecondPage></SecondPage>
            <ChallengeIntro></ChallengeIntro>
            <DailyChallengeHolder></DailyChallengeHolder>
            <NewsLetter></NewsLetter>
            <Footer></Footer>
        </>
    )
}