import './Skill.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import htmlimage from '../../image/html5.2.png';
import reactimage from '../../image/react.1.png'
import cssimage from '../../image/CSS1.png'
import jsimage from '../../image/JS.png'
import contactImage from '../../image/contact.png'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import responsiveImage from '../../image/responsive.png'
import sbImage from '../../image/simpleblog.png'
import dbImage from '../../image/dogblog.png'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import BMI from '../../image/BMI.jpg'

function SkillPage() {
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
            <div className='skill-container'>
                <div className='skill'>
                    <div className='html-skill'>
                        <img id='s-image' src={htmlimage} ></img>
                        <ProgressBar className='bar' style={{ backgroundColor: 'transparent', color: 'black' }} animated striped variant="danger" now={70} label={`${70}%`} />
                    </div>
                    <div className='css-skill'>
                        <img id='s-image' src={cssimage} ></img>
                        <ProgressBar className='bar' style={{ backgroundColor: 'transparent' }} animated striped variant="succes" now={70} label={`${70}%`} />
                    </div>
                    <div className='js-skill'>
                        <img id='s-image' src={jsimage} ></img>
                        <ProgressBar className='bar' style={{ backgroundColor: 'transparent' }} animated striped variant="warning" now={40} label={`${40}%`} />
                    </div>
                    <div className='react-skill'>
                        <img id='s-image' src={reactimage} ></img>
                        <ProgressBar className='bar' style={{ backgroundColor: 'transparent' }} animated striped variant="info" now={50} label={`${50}%`} />
                    </div>
                </div>
                <div className='carousel'>
                    <Carousel className='carousel-content'>
                        <div>
                            <img src={contactImage} />
                            <p>Contact Project</p>
                        </div>
                        <div>
                            <img src={responsiveImage} />
                            <p>Responsive Design</p>
                        </div>
                        <div>
                            <img src={sbImage} />
                            <p>Simple Blog</p>
                        </div>
                        <div>
                            <img src={dbImage} />
                            <p>Dog Blog</p>
                        </div>
                        <div>
                            <img src={BMI} />
                            <p>BMI </p>
                        </div>
                    </Carousel>
                </div>
            </div>
        </>
    )
}

export default SkillPage;