import React from 'react';
import logo from './logo.png'
import './Footer.css'


export const Footer = () => {
    return (
        <section>
            <div className="footer-main-div">
                <div className="footer-align-div">
                    <div className="logo-location">
                        <img src={logo} alt=''></img>
                        <p>Location, Somewhere, 4356 road</p>
                    </div>
                    <div className="footer-navigation">
                        <p>Admission</p>
                        <p>Programs</p>
                        <p>Contact</p>
                        <p>About us</p>
                    </div>
                    <div className="footer-contact">
                        <p>Contact</p>
                        <p>email@gmail.com</p>
                        <p>+123456789</p>
                        <p>Send us a message</p>
                    </div>
                </div>

            </div>
        </section>
    );
}