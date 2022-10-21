import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function Background() {
    const particlesInit = async (main) => {
      console.log(main);
  
      await loadFull(main);
    };
  
    return (
      <div >
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
      </div>
    );
  }