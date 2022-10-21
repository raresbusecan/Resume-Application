import './About.css'
import React from 'react'
import Logo from '../../image/Logo.png'
import Background from '../../Background/background'

function AboutPage() {
    
    return (
        <>
            <Background/>
            <div className='about-content'>
                <div className='first-container'>
                    <div className='content'>
                        <h1>Junior programmer</h1>

                        <p>This whole industry was a curiosity for me until I started writing a few lines of code.
                            I started by myself with a great ardor to know the secrets but I ended up with my patience stretched to the maximum without having a mentor or someone to guide me in the problems encountered.
                            Now I started to understand a little bit more of the experience gained in the Web Development course at the Informal School of IT which is a whole programming iceberg and I know that I have a long way to go to reach the top of it.
                        </p>
                    </div>
                </div>
                <div className='second-container'>
                    <h1>Sports & Videogames</h1>
                    <div id='content2'>
                        <p>As a small child I developed a passion for sports and video games and they became a significant part of my life.
                            They provide the much needed relaxation for my daily life and are a mean by which I can disconnect from unpleasant but usual experiences and emotions.
                            I believe that a work derived from pleasure brings with it results both professionally and personally. Those are the secrets for a more efficient life.
                        </p>
                    </div>
                </div>
            </div>
            <img className='logo' src={Logo}></img>
        </>
    )
}

export default AboutPage;
