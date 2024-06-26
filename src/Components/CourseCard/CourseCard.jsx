import React from "react";
import './CourseCard.css';
import { OutlineButton } from "../OutlineButton/OutlineButton";

export const CourseCard = () => {
    return (
        <div className="course-card">
            <div className="card-upper-div">
                <div className="course-circle"></div>
            </div>
            <div className="course-lower-div">
                <h2>Course Name</h2>
                <p>Through our exclusive online license preparation courses, learn real time from our experienced.</p>
                <OutlineButton isPrimary={true} color={"black"} text={"Join Course"} marginLeft="0"></OutlineButton>
                <OutlineButton className='wish-list' color={"black"} text={"Wish List"} mar={'10px'}></OutlineButton>
            </div>
        </div>
    )
}