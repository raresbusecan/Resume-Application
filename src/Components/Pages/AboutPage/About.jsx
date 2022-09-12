import './About.css'
import React from 'react'
import Logo from '../../image/Logo.png'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function AboutPage() {
    const particlesInit = async (main) => {
        console.log(main);
        await loadFull(main);
    };
    return (
        <>
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={{
                    "fullScreen": {
                        "enable": true,
                        "zIndex": 1
                    },
                    "particles": {
                        "number": {
                            "value": 100,
                            "density": {
                                "enable": false,
                                "value_area": 1000
                            }
                        },
                        "color": {
                            "value": "#116466"
                        },
                        "shape": {
                            "type": ["circle", "triangle", "polygon"],
                            "options": {
                                "sides": 10
                            }
                        },
                        "opacity": {
                            "value": 0.5,
                            "random": false,
                            "anim": {
                                "enable": true,
                                "speed": 1,
                                "opacity_min": 0.1,
                                "sync": false
                            }
                        },
                        "size": {
                            "value": 20,
                            "random": false,
                            "anim": {
                                "enable": true,
                                "speed": 40,
                                "size_min": 0.1,
                                "sync": false
                            }
                        },
                        "rotate": {
                            "value": 0,
                            "random": true,
                            "direction": "clockwise",
                            "animation": {
                                "enable": true,
                                "speed": 5,
                                "sync": false
                            }
                        },
                        "line_linked": {
                            "enable": false,
                            "distance": 600,
                            "color": "#D1EBE2",
                            "opacity": 0.1,
                            "width": 1
                        },
                        "move": {
                            "enable": true,
                            "speed": 2,
                            "direction": "none",
                            "random": false,
                            "straight": false,
                            "out_mode": "out",
                            "attract": {
                                "enable": false,
                                "rotateX": 600,
                                "rotateY": 1200
                            }
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": ["grab"]
                            },
                            "onclick": {
                                "enable": true,
                                "mode": "bubble"
                            },
                            "resize": true
                        },
                        "modes": {
                            "grab": {
                                "distance": 400,
                                "line_linked": {
                                    "opacity": 0.1
                                }
                            },
                            "bubble": {
                                "distance": 400,
                                "size": 30,
                                "duration": 0.5,
                                "opacity": 0.1,
                                "speed": 3
                            },
                            "repulse": {
                                "distance": 200
                            },
                            "push": {
                                "particles_nb": 4
                            },
                            "remove": {
                                "particles_nb": 2
                            }
                        }
                    },
                    "retina_detect": true,
                    "background": {
                        "color": "transparent",
                        "image": "",
                        "position": "50% 50%",
                        "repeat": "repeat",
                        "size": "cover"
                    }
                }}
            />
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
