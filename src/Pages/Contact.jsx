import React from "react";
import { TopBar } from '../Components/TopBar/TopBar'
import { FirstPage } from '../Components/FirstPage/FirstPage';
import { SecondPage } from '../Components/SecondPage/SecondPage';
import contactPageBackground from '../images/contact-background.png'
import { ContactForm } from "../Components/ContactForm/ContactForm";
import { GoogleMap } from "../Components/GoogleMap/GoogleMap";

export const ContactPage = () => {
    return (
        <>
            <TopBar></TopBar>
            <FirstPage backgroundImageUrl={contactPageBackground} mainTitle={'Contact Us'}></FirstPage>
            <SecondPage></SecondPage>
            <ContactForm></ContactForm>
            <GoogleMap></GoogleMap>
        </>
    )
}