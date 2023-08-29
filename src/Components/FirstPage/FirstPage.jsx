import React from 'react';
import { Navbar } from '../Navbar/Navbar';
import './FirstPage.css'
import { ProgramFinder } from '../ProgramFinder/ProgramFinder';
import { OutlineButton } from '../OutlineButton/OutlineButton';

export const FirstPage = ({ backgroundImageUrl, mainTitle }) => {
    const backgroundImage = {
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)),url(${backgroundImageUrl})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        objectFill: 'fill',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '90vh',
        backgroundColor: 'rgba(244, 255, 0, 0.1);',
        paddingBottom: '160px',

    }
    return (
        <section className='first-page' style={backgroundImage}>
            <Navbar></Navbar>
            <h1 className='main-title'>{mainTitle}</h1>
            <OutlineButton className='first-page-button' color={"white"} text={"READ MORE"} marginLeft={'90px'} horizontalPadding={'90px'}></OutlineButton>
            <ProgramFinder></ProgramFinder>
        </section>
    )
}