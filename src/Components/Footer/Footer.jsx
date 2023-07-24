// import './App.css';
import React from 'react';


export const Footer = () => {
    return (
        <>
            <div className="footer">
                <section className='newsletter colmn'>
                    <h1>
                        Sign Up To Our Newsletter
                    </h1>
                    <p>
                        As a customer oriented company, we’re committed to getting you the help you need anytime. If our FAQs did not answer your questions, you can enter your details and will get back to you as soon as possible
                    </p>
                    <input id='fistNmeInputboxFoter' className='inputBox' placeholder='First Name'></input>
                    <input id='numberInputboxFoter' className='inputBox' placeholder='Number'></input>
                    <input id='emailInputboxFoter' className='inputBox' placeholder='Email'></input>
                    <button id='joinComm' className='btn'>Join The Community</button>
                </section>
                <div className='spacer'></div>
                <section className='footerSec row'>
                    <div id='colLft' className='colmn lft'>
                        <img style={{ width: '100%', height: '100%' }} src="https://via.placeholder.com/299x70" alt="" />
                        <div style={{ color: 'white', fontSize: 20, fontFamily: 'Poppins', fontWeight: '500', textTransform: 'capitalize', wordWrap: 'break-word' }}>Location, Somewhere, 4356 road</div>
                        <button id='contactUs' className='btn'>Contact us</button>
                    </div>
                    <div id='colrtf' className='colmn rtf'>
                        <div id='colLft1' className='colmn ltf'>
                            <div style={{ color: 'white', fontSize: 20, fontFamily: 'Poppins', fontWeight: '500', textTransform: 'capitalize', wordWrap: 'break-word' }}>admission</div>
                            <div style={{ color: 'white', fontSize: 20, fontFamily: 'Poppins', fontWeight: '500', textTransform: 'capitalize', wordWrap: 'break-word' }}>programs</div>
                            <div style={{ color: 'white', fontSize: 20, fontFamily: 'Poppins', fontWeight: '500', textTransform: 'capitalize', wordWrap: 'break-word' }}>contact</div>
                            <div style={{ color: 'white', fontSize: 20, fontFamily: 'Poppins', fontWeight: '500', textTransform: 'capitalize', wordWrap: 'break-word' }}>about us</div>
                        </div>
                        <div id='colrft1' className='colmn rtf'>
                            <div style={{ color: 'white', fontSize: 20, fontFamily: 'Poppins', fontWeight: '500', textTransform: 'capitalize', wordWrap: 'break-word' }}>Contact</div>
                            <div style={{ opacity: 0.50, color: 'white', fontSize: 15.79, fontFamily: 'Poppins', fontWeight: '400', textTransform: 'lowercase', wordWrap: 'break-word' }}>email@email.com</div>
                            <div style={{ opacity: 0.50, color: 'white', fontSize: 15.79, fontFamily: 'Poppins', fontWeight: '400', textTransform: 'capitalize', wordWrap: 'break-word' }}>+12 123 1234</div>
                            <div style={{ color: 'white', fontSize: 20, fontFamily: 'Poppins', fontWeight: '500', textTransform: 'capitalize', wordWrap: 'break-word' }}>Send us a message</div>
                            <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                                <div id='socials' className='row'>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}