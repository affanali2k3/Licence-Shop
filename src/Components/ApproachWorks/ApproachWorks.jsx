import React from "react";
import './ApproachWorks.css';
import { ApproachWorksCard } from "../ApproachWorksCard/ApproachWorksCard";
import icon1 from './images/1.png'
import icon2 from './images/2.png'
import icon3 from './images/3.png'
import icon4 from './images/4.png'
import icon5 from './images/5.png'
import icon6 from './images/6.png'
import icon7 from './images/7.png'
import icon8 from './images/8.png'
import icon9 from './images/9.png'

export const ApproachWorks = () => {
    return (
        <div className="approach-works-main-div">
            <h1>Why Our Approach Works</h1>
            <div className="another">
                <div className="approach-works-align-div">
                    <div className="approach-works-content-div">
                        <ApproachWorksCard imageUrl={icon1}></ApproachWorksCard>
                        <ApproachWorksCard imageUrl={icon2}></ApproachWorksCard>
                        <ApproachWorksCard imageUrl={icon3}></ApproachWorksCard>
                        <ApproachWorksCard imageUrl={icon4}></ApproachWorksCard>
                        <ApproachWorksCard imageUrl={icon5}></ApproachWorksCard>
                        <ApproachWorksCard imageUrl={icon6}></ApproachWorksCard>
                        <ApproachWorksCard imageUrl={icon7}></ApproachWorksCard>
                        <ApproachWorksCard imageUrl={icon8}></ApproachWorksCard>
                        <ApproachWorksCard imageUrl={icon9}></ApproachWorksCard>
                    </div>
                </div>
            </div>
        </div>

    )
}