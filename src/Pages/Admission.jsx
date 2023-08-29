import React from "react";
import { TopBar } from '../Components/TopBar/TopBar'
import { FirstPage } from '../Components/FirstPage/FirstPage';
import { SecondPage } from '../Components/SecondPage/SecondPage';
import { AdmissionForm } from '../Components/AdmissionForm/AdmissionForm';
import admissionPageBackground from '../images/admission-background.png'
import { Footer } from "../Components/Footer/Footer";
import { NewsLetter } from "../Components/NewsLetter/NewsLetter";

export const AdmissionPage = () => {
    return (
        <>
            <TopBar></TopBar>
            <FirstPage backgroundImageUrl={admissionPageBackground} mainTitle={'Admission'}></FirstPage>
            <SecondPage></SecondPage>
            <AdmissionForm></AdmissionForm>
            <NewsLetter></NewsLetter>
            <Footer></Footer>
        </>
    )
}