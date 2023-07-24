import React from "react";
import './ContactForm.css'
import { OutlineButton } from "../OutlineButton/OutlineButton";

export const ContactForm = () => {
    return (
        <div className="contact-box">
            <div>
                <h2>SEND A MESSAGE</h2>
                <p>Your Email Address will not be published. Required fields are marked</p>
            </div>
            <div>
                <div className="name-email">
                    <input type="text" placeholder="First Name"></input>
                    <input type="text" placeholder="Email"></input>
                </div>
                <div>
                    <input type="text" className="subject" placeholder="Subject"></input>
                </div>
                <textarea placeholder="Message" rows={10}></textarea>
                <div className="button-div">
                    <OutlineButton color={"black"} text={"SEND"}></OutlineButton>
                </div>
            </div>
        </div>)
}