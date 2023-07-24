import React from "react";
import './AdmissionForm.css'
import { OutlineButton } from "../OutlineButton/OutlineButton";

export const AdmissionForm = () => {
    return (
        <div className="align-div-admission-form">
            <div>
                <h2>ADMISSION FORM</h2>
                <input type="text" placeholder="First Name"></input>
                <input type="text" placeholder="Select Course"></input>
                <input type="text" placeholder="MM/DD/YY"></input>
                <input type="text" placeholder="Parent Name"></input>
                <input type="text" placeholder="Address"></input>
                <input type="text" placeholder="City"></input>
                <input type="text" placeholder="Email"></input>
                <div className="agree-terms">
                    <input type="checkbox"></input>
                    <p>I agree to all the terms and conditions</p>
                </div>
                <OutlineButton color={"black"} text={"SUBMIT FORM"}></OutlineButton>
            </div>
        </div>
    )
}