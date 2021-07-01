import React from 'react'
import './Contact.css'

export default function Contact({contactRef}) {
    return (
        <section ref={contactRef} id='contact' className='container'>
            <h2>Contact</h2>
            <article>

                <div className='background-image'>
                    <h3>Get in touch with me!</h3>
                </div>

                <div className='contact-info'>
                    <div className='phone'>
                        <p id='logo'>Ida <br/><span id='nav-logo'>Development</span></p>
                        <p id='email'>so.kida@hotmail.com</p>
                    </div>
                    <div className='message'>
                        <form>
                            <h3>Send Message</h3>
                            <input placeholder='name' type="text"></input>
                            <input placeholder='e-mail' type='email'></input>
                            <input placeholder='Message' type="text"></input>
                        </form>
                    </div>
                </div>

            </article>
        </section>
    )
}
