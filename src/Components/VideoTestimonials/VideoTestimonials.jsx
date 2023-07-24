import React from 'react'
import testimonialImg from './testimonial.png'
import { OutlineButton } from '../OutlineButton/OutlineButton'
import './VideoTestimonials.css'

export const VideoTestimonials = () => {
    return (
        <div className='main-block-video-testimonials'>
            <h1>Video Testimonials</h1>
            <div className="video-testomonials-align-div">
                <div className='image-container'>
                    <img src={testimonialImg} alt="" />
                    <div className="play-icon"></div>
                </div>
                <div className='image-container'>
                    <img src={testimonialImg} alt="" />
                    <div className="play-icon"></div>
                </div>
            </div>
            <h4>You Will Be The Next</h4>
            <div className='btn'>
                <OutlineButton color={"black"} text={"VIEW MORE"} marginLeft='0'></OutlineButton>
            </div>
        </div>
    )
}
