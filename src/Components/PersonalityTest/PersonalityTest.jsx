import React from 'react'
import './PersonalityTest.css'
import { OutlineButton } from '../OutlineButton/OutlineButton'

export const PersonalityTest = () => {
    return (
        <div className='personality-main-div'>
            <h3>Take our 60 Second Personality Questionaire to Figure Out What You Were Made To Do!</h3>
            <OutlineButton color={"black"} text={"TAKE THE QUESTIONARRE"}></OutlineButton>
        </div>
    )
}
