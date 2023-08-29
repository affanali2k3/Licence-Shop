import React from 'react'
import './NewsLetter.css'
import { OutlineButton } from '../OutlineButton/OutlineButton'

export const NewsLetter = () => {
    return (
        <div className="news-letter-main-div">
            <h1>Sign up to our Newsletter</h1>
            <p>As a customer oriented company, we’re committed to getting you the help you
                need anytime. If our FAQs did not answer your questions, you can enter your details and will get back to you as soon as possible</p>
            <input type='name' name='name' placeholder='First Name'></input>
            <input type='number' name='number' placeholder='Number'></input>
            <input type='email' name='email' placeholder='Email'></input>
            <OutlineButton color={'white'} text={'JOIN THE COMMUNITY'} horizontalPadding='40px'></OutlineButton>
        </div>
    )
}
