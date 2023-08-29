import React from "react";
import './ProgramFinder.css'
import { OutlineButton } from "../OutlineButton/OutlineButton";

export const ProgramFinder = () => {
    return (
        <div className="align-div">
            <div className='program-finder-box'>
                <h1>Find Your Program</h1>
                <div className="program-finder-search">
                    <input type="text" className="program-finder-textfield" placeholder="Search"></input>
                    <div class="program-finder-career-dropdown">
                        <span>Career</span>
                        <div class="program-finder-career-dropdown-content">
                            <p>Hello World!</p>
                        </div>
                    </div>
                    <div class="program-finder-type-dropdown">
                        <span>Type</span>
                        <div class="program-finder-type-dropdown-content">
                            <p>Hello World!</p>
                        </div>
                    </div>
                    <div></div>
                    <div></div>
                    <OutlineButton text={'Search'} color={'black'} horizontalPadding={'40px'}></OutlineButton>
                </div>
            </div>
        </div>
    )
}