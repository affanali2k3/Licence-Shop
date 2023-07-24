import React from 'react'
import courseImage from './course-img.png'
import './SingleCourseDescription.css'

export const SingleCourseDescription = () => {
    return (
        <div className="single-course-description-main-div">
            <div className="course-name-img">
                <img src={courseImage} alt="" />
                <div className="course-name">
                    <h2>Course Name</h2>
                    <p>Course Description Lorem Ipsum doret
                        Lorem Ipsum doret Lorem Ipsum doret. </p>
                </div>
            </div>
            <div className="join-course">
                <div className="join">
                    <h3>JOIN OUR COURSE NOW!</h3>
                    <p> Lorem Ipsum doret Lorem Ipsum doret Lorem Ipsum doret Lorem Ipsum doret.</p>
                </div>
                <div className="form">
                    <div className="name">
                        <input type='text' placeholder='First Name'></input>
                        <input type='text' placeholder='Last Name'></input>
                    </div>
                    <input type='email' placeholder='Email'></input>
                    <input type='city' placeholder='State/City'></input>
                    <button className='btn'>Shop Now</button>
                </div>
            </div>
        </div>
    )
}
