import React from 'react'
import whatYouLearnImg from './what-you-learn.png'
import './WhatYouWillLearn.css'

export const WhatYouWillLearn = () => {
    return (
        <div className="what-you-learn-main-div">
            <div className="what-you-learn-content">
                <h3>WHAT YOU WILL LEARN IN THIS COURSE:</h3>
                <div className="learn-point">
                    <h4>CONTENT AND PLATFORM ARE UP TO DATE</h4>
                    <div className="para">
                        <div className="line"></div>
                        <p>Content is the key to your success, and we`re always updating our courses to stay on top of industry trends. We want you to study, grow, and succeed by using the most cutting-edge educational concepts.

                        </p>
                    </div>
                </div>
                <div className="learn-point">
                    <h4>ONLINE LEARNING</h4>
                    <div className="para">
                        <div className="line"></div>
                        <p>Classrooms can be inconvenient, and obsolete education can be provided. Online learning solution was created to keep students engaged with dynamic content and real-world scenarios.

                        </p>
                    </div>
                </div>
                <div className="learn-point">
                    <h4>CUSTOMER SERVICE</h4>
                    <div className="para">
                        <div className="line"></div>
                        <p>We’re available by phone and email on weekdays.

                        </p>
                    </div>
                </div>
            </div>
            <img src={whatYouLearnImg} alt="" />
        </div>
    )
}
