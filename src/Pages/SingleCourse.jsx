import React from 'react'
import { TopBar } from '../Components/TopBar/TopBar'
import { FirstPage } from '../Components/FirstPage/FirstPage';
import { SecondPage } from '../Components/SecondPage/SecondPage';
import { SingleCourseDescription } from '../Components/SingleCourseDescription/SingleCourseDescription'
import { AboutCourse } from '../Components/AboutCourse/AboutCourse'
import { WhatYouWillLearn } from '../Components/WhatYouWillLearn/WhatYouWillLearn'
import { CourseEligibility } from '../Components/CourseEligibility/CourseEligibility'
import singleCourseBackground from '../images/home-background.png'

export const SingleCourse = () => {
    return (
        <>
            <TopBar></TopBar>
            <FirstPage backgroundImageUrl={singleCourseBackground} mainTitle={'Course Name'}></FirstPage>
            <SecondPage></SecondPage>
            <SingleCourseDescription></SingleCourseDescription>
            <AboutCourse></AboutCourse>
            <WhatYouWillLearn></WhatYouWillLearn>
            <CourseEligibility></CourseEligibility>
        </>)
}
