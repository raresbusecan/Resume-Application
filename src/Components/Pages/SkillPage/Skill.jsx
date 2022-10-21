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
import Background from '../../Background/background';
import BMI from '../../image/BMI.jpg'

function SkillPage() {
    return (
        <>
        <Background/>
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
                        <ProgressBar className='bar' style={{ backgroundColor: 'transparent' }} animated striped variant="info" now={40} label={`${40}%`} />
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