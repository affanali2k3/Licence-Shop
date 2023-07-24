import React from "react";
import map from './map.png';
import './GoogleMap.css'

export const GoogleMap = () => {
    return (
        <div className="google-map">
            <h1>LOCATION ON MAP</h1>
            <img src={map} height={400} alt=""></img>
        </div >
    )
}