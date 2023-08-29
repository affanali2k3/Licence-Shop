import React from 'react'
import './AboutCourse.css'
import { AboutCoursePoint } from '../AboutCoursePoint/AboutCoursePoint'

export const AboutCourse = () => {
    return (
        <div className='about-course-main-div'>
            <h1>ABOUT THIS COURSE</h1>
            <div className="about-course-align-div">
                <div className="about-course-cards">
                    <AboutCoursePoint></AboutCoursePoint>
                    <AboutCoursePoint></AboutCoursePoint>
                    <AboutCoursePoint></AboutCoursePoint>
                    <AboutCoursePoint></AboutCoursePoint>
                </div>
            </div>
        </div>
    )
}
