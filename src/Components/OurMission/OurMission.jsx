import React from 'react'
import ourMissionImg from './our-mission.png'
import './OurMission.css'

export const OurMission = () => {
    return (
        <div className="our-mission-main-div">
            <div className="content">
                <h2>OUR MISSION</h2>
                <p>Every year, we hope to assist thousands of professionals in beginning a successful real estate career. Also, to assist students in achieving greater success in their daily lives and careers. We accomplish this through tools and technology that assist professionals in becoming licensed, maintaining their licenses, and gaining the skills they need to excel in their areas.

                </p>
            </div>
            <img src={ourMissionImg} alt="" />
        </div>
    )
}
