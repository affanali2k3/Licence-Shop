import React from 'react'
import pajiImg from './paji.png'
import { OutlineButton } from '../OutlineButton/OutlineButton'
import './MyStory.css'

export const MyStory = () => {
    return (
        <div className='main-block'>
            <h1>My Story</h1>
            <div className='my-story-align-div'>
                <img className='my-story-img' src={pajiImg} alt="">
                </img>
                <div className='my-story-content'>
                    <h4>Prabhjit Singh</h4>
                    <p>As a customer oriented company, we’re committed to getting you the help you need anytime. If our FAQs did not answer your questions, you can enter your details and will get back to you as soon as possible...</p>
                    <OutlineButton color={'black'} text={'Read More'} marginLeft='0'></OutlineButton>
                </div>
            </div>
        </div>
    )
}
