import React from 'react'
import './ApproachWorksCard.css'

export const ApproachWorksCard = ({ imageUrl }) => {
    return (
        <div className='approach-card-main-div'>
            <img src={imageUrl} alt="" ></img>
            <div>
                <h5>COMMUNITY</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, totam?</p>
            </div>
        </div>
    )
}
