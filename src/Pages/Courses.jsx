import React from "react";
import { TopBar } from '../Components/TopBar/TopBar'
import { FirstPage } from '../Components/FirstPage/FirstPage';
import { SecondPage } from '../Components/SecondPage/SecondPage';
import coursesPageBackground from '../images/courses-background.png'
import { CoursesDisplay } from "../Components/CoursesDisplay/CoursesDisplay";
import { Footer } from "../Components/Footer/Footer";
import { NewsLetter } from "../Components/NewsLetter/NewsLetter";

export const Courses = () => {
    return (
        <>
            <TopBar></TopBar>
            <FirstPage backgroundImageUrl={coursesPageBackground} mainTitle={'Courses'}></FirstPage>
            <SecondPage></SecondPage>
            <CoursesDisplay></CoursesDisplay>
            <NewsLetter></NewsLetter>
            <Footer></Footer>
        </>
    )
}