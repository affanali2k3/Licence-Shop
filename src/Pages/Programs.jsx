import React from "react";
import { TopBar } from '../Components/TopBar/TopBar'
import { FirstPage } from '../Components/FirstPage/FirstPage';
import { SecondPage } from '../Components/SecondPage/SecondPage';
import programsPageBackground from '../images/programs-background.png'
import { CoursesDisplay } from "../Components/CoursesDisplay/CoursesDisplay";
import { Footer } from "../Components/Footer/Footer";
import { NewsLetter } from "../Components/NewsLetter/NewsLetter";

export const Programs = () => {
    return (
        <>
            <TopBar></TopBar>
            <FirstPage backgroundImageUrl={programsPageBackground} mainTitle={'Programs'}></FirstPage>
            <SecondPage></SecondPage>
            <CoursesDisplay></CoursesDisplay>
            <NewsLetter></NewsLetter>
            <Footer></Footer>
        </>
    )
}