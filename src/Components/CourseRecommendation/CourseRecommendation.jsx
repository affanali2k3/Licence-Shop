import React from 'react'
import { CourseCard } from '../CourseCard/CourseCard'

export const CourseRecommendation = () => {
    return (
        <div className="course-recommendation-main-div">
            <div className="course-recommendation-align-div">
                <h2>People who bough this, also bougth the following</h2>
                <CourseCard></CourseCard>
            </div>
        </div>
    )
}
