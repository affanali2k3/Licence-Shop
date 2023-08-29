import React from 'react'
import './TripleGuarantee.css'
import tripleGuaranteeImage from './triple-guarantee-image.png'

export const TripleGuarantee = () => {
    return (
        <div className='align-div-triple-guarantee'>
            <img src={tripleGuaranteeImage} alt=""></img>
            <div className='three-points'>
                <h2>Triple Guarantee</h2>
                <p>1. Pass the exam</p>
                <p>2. Six-figure income in the first year</p>
                <p>3. 24/7 customer support</p>
            </div>
            {/* <div className="triple-guarantee-button-div">
                <OutlineButton text={'READ MORE'} color={'black'}></OutlineButton>
            </div> */}
        </div>
    )
}
