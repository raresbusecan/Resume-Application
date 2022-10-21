import './Contact.css'
import emailjs from '@emailjs/browser';
import BackgroundForm from '../../image/contact-futurist.jpg'
import React, { useRef } from 'react';
import Background from '../../Background/background';

function ContactPage() {
    
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
        <Background/>
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
