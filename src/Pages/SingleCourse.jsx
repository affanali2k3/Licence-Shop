import React from 'react'
import { TopBar } from '../Components/TopBar/TopBar'
import { FirstPage } from '../Components/FirstPage/FirstPage';
import { SecondPage } from '../Components/SecondPage/SecondPage';
import { SingleCourseDescription } from '../Components/SingleCourseDescription/SingleCourseDescription'
import { AboutCourse } from '../Components/AboutCourse/AboutCourse'
import { WhatYouWillLearn } from '../Components/WhatYouWillLearn/WhatYouWillLearn'
import { CourseEligibility } from '../Components/CourseEligibility/CourseEligibility'
import singleCourseBackground from '../images/home-background.png'
import { Footer } from "../Components/Footer/Footer";
import { NewsLetter } from "../Components/NewsLetter/NewsLetter";
import { CourseFreeTrial } from '../Components/CourseFreeTrial/CourseFreeTrial';
import { CourseFAQ } from '../Components/CourseFAQ/CourseFAQ';
import { CoursePackageFeatures } from '../Components/CoursePackageFeatures/CoursePackageFeatures';

export const SingleCourse = () => {
    return (
        <>
            <TopBar></TopBar>
            <FirstPage backgroundImageUrl={singleCourseBackground} mainTitle={'Course Name'}></FirstPage>
            <SecondPage></SecondPage>
            <SingleCourseDescription></SingleCourseDescription>
            <AboutCourse></AboutCourse>
            <WhatYouWillLearn title={'What You Will Learn In This Course'}></WhatYouWillLearn>
            <CourseEligibility></CourseEligibility>
            <CoursePackageFeatures></CoursePackageFeatures>
            <CourseFreeTrial></CourseFreeTrial>
            <CourseFAQ></CourseFAQ>
            <NewsLetter></NewsLetter>
            <Footer></Footer>
        </>)
}
