import React from "react";
import './MakeDifferent.css';
import makeDifferent from './different-video.png'
export const MakeDifferent = ({ title }) => {
    return (
        <div className="make-different-align-div">
            <h2>{title}</h2>
            <img className="different-video" src={makeDifferent} alt=""></img>
        </div>
    )
}