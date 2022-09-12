import './Contact.css'
import emailjs from '@emailjs/browser';
import BackgroundForm from '../../image/contact-futurist.jpg'
import React, { useRef } from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function ContactPage() {
    const particlesInit = async (main) => {
        console.log(main);
        await loadFull(main);
    };
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_pv2ak7q', 'template_wukekc2', form.current, 'wL6UcFmi2g4_PlhDv')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
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
            <div >
                <img className='background' src={BackgroundForm}></img>
                <form className='form' ref={form} onSubmit={sendEmail}>
                    <div className='formular'>
                        <div className='content-contact'>
                            <label>Name</label>
                            <input id='t-input' type="text" name="name" />
                            <label>Email</label>
                            <input id='t-input' type="email" name="email" />
                            <label>Message</label>
                            <textarea id='t-input' name="message" />
                            <input id='btn' type="submit" value="Send" />
                        </div>
                    </div>
                    <div className='epl'>
                        <div>
                            <i className="bi bi-envelope-fill" ></i>
                            <h2 id='epl-title'>Email:</h2>
                            <p id='epl-info'>raresbusecan1999@gmail.com</p>
                        </div>
                        <div>
                            <i className="bi bi-telephone-fill"></i>
                            <h2 id='epl-title'>Phone:</h2>
                            <p id='epl-info'>0735784263</p>
                        </div>
                        <div>
                            <i className="bi bi-geo-alt-fill"></i>
                            <h2 id='epl-title'>Location:</h2>
                            <p id='epl-info'>Cluj Napoca - Baia Mare</p>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default ContactPage;
