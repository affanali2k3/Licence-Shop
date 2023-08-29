import React from "react";
import { TopBar } from '../Components/TopBar/TopBar'
import { FirstPage } from '../Components/FirstPage/FirstPage';
import { SecondPage } from '../Components/SecondPage/SecondPage';
import homePageBackground from '../images/home-background.png'
import { MakeDifferent } from "../Components/MakeDifferent/MakeDIfferent";
import { TripleGuarantee } from "../Components/TripleGuarantee/TripleGuarantee";
import { ApproachWorks } from "../Components/ApproachWorks/ApproachWorks";
import { PersonalityTest } from "../Components/PersonalityTest/PersonalityTest";
import { ChallengesDisplayHome } from "../Components/ChallengesDisplayHome/ChallengesDisplayHome";
import { MyStory } from "../Components/MyStory/MyStory";
import { VideoTestimonials } from '../Components/VideoTestimonials/VideoTestimonials'
import { ReadListenWatch } from '../Components/ReadListenWatch/ReadListenWatch'
import { Footer } from "../Components/Footer/Footer";
import { NewsLetter } from "../Components/NewsLetter/NewsLetter";

export const HomePage = () => {
    return (
        <>
            <TopBar></TopBar>
            <FirstPage backgroundImageUrl={homePageBackground} mainTitle={'Where dreams get fulfilled.'}></FirstPage>
            <SecondPage></SecondPage>
            <MakeDifferent title={"What Makes Us Different?"}></MakeDifferent>
            <TripleGuarantee></TripleGuarantee>
            <ApproachWorks></ApproachWorks>
            <PersonalityTest></PersonalityTest>
            <MakeDifferent title={"Why Do We Do Challenges?"}></MakeDifferent>
            <ChallengesDisplayHome></ChallengesDisplayHome>
            <MyStory></MyStory>
            <VideoTestimonials></VideoTestimonials>
            <ReadListenWatch></ReadListenWatch>
            <NewsLetter></NewsLetter>
            <Footer></Footer>
        </>
    )
}