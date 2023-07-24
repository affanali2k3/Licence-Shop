import React from "react";
import { TopBar } from '../Components/TopBar/TopBar'
import { FirstPage } from '../Components/FirstPage/FirstPage';
import { SecondPage } from '../Components/SecondPage/SecondPage';
import { OurMission } from '../Components/OurMission/OurMission';
import { WhatYouWillLearn } from '../Components/WhatYouWillLearn/WhatYouWillLearn'
import aboutPageBackground from '../images/about-background.png'

export const AboutPage = () => {
    return (
        <>
            <TopBar></TopBar>
            <FirstPage backgroundImageUrl={aboutPageBackground} mainTitle={'About Us'}></FirstPage>
            <SecondPage></SecondPage>
            <OurMission></OurMission>
            <WhatYouWillLearn></WhatYouWillLearn>
        </>
    )
}