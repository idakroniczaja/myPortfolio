import React from 'react'
import './Contact.css'
import emailjs from 'emailjs-com';

export default function Contact({contactRef, dataAos}) {

const sendEmail = (e) => {
    e.prevendDefault(e)

    emailjs.sendForm()
}

    return (
        <section data-aos={dataAos}ref={contactRef} id='contact' className='container'>
            <h2>Contact</h2>
            <article>

                <div className='background-image'>
                 <div id='form'>
                    <form onSubmit={sendEmail}>
                        <h3>Send message</h3>
                        <input placeholder='your name'></input>
                        <input placeholder='your email'></input>
                        <textarea placeholder='message' name="description"  rows="10"></textarea>
                        <button>Send message</button>
                    </form>  
                  </div>
                    

                    <div id='email'>
                        so.kida@hotmail.com
                    </div>

                </div>

            

            </article>
        </section>
    )
}
