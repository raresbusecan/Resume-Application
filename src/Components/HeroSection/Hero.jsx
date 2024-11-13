import './Hero.css';
import React from 'react';
import Typewriter from 'typewriter-effect';
import futuristIMG from '../image/futuristic.png';
import Resume from '../image/Busecan Rares  Resume.pdf'
import "bootstrap-icons/font/bootstrap-icons.css";

function HeroPage() {
    return (
        <>
            <div className='hero' >
                <div className='hero-section'>
                    <div >
                        <a href={Resume} download="Busecan Rares  Resume.pdf" >
                            <button className="resumeButton" data-aos="fade-up">Resume</button>
                        </a>
                    </div>
                    <div >
                        <h1 >Busecan Rares</h1>
                        <Typewriter
                            options ={{
                                strings: ['Welcome!', 'Junior Web Developer'],
                                autoStart: true,
                                loop: true
                            }}
                        />
                    </div>
                </div>
                <div>
                    <img id='futuristic-img' src={futuristIMG}></img>
                    <div className='social'>
                        <div className='icons'>
                            <a href='https://www.facebook.com/rares.busecan' target="_blank" className="bi bi-facebook"></a>
                            <a href='https://www.instagram.com/raresbusecan/' target="_blank" className="bi bi-instagram"></a>
                            <a href='https://www.linkedin.com/in/rares-busecan/' target="_blank" className="bi bi-linkedin"></a>
                            <a href='https://github.com/dino4030' target="_blank" className="bi bi-github"></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HeroPage;