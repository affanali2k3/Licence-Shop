import React from "react";
import './CoursesDisplay.css';
import { CourseCard } from "../CourseCard/CourseCard";

export const CoursesDisplay = () => {
    return (
        <div className="courses-display-align-div">
            <CourseCard></CourseCard>
            <CourseCard></CourseCard>
            <CourseCard></CourseCard>
            <CourseCard></CourseCard>
        </div>
    )
}