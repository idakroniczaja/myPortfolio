import React from 'react'
import './Contact.css'
import emailjs from 'emailjs-com';

export default function Contact({contactRef, dataAos}) {

const sendEmail = (e)=> {
e.preventDefault()
 
    emailjs.sendForm("service_aowrs29","template_lb3tbjx", e.target ,"user_DSGHm0rdiLjlkKMr2aVXe")
    .then(res=>{
        console.log(res.text)
    }).catch(err=>console.log(err.text))
    e.target.reset()
}
  
    return (
        <section data-aos={dataAos}ref={contactRef} id='contact' className='container'>
            <h2>Contact</h2>
            <article>

                <div className='background-image'>
                 <div id='form'>
                    <form onSubmit={sendEmail}>
                        <h3>Send message</h3>
                        <input name='name' type='text' placeholder='your name'/>
                        <input name='email' type='email' placeholder='your email'/>
                        <textarea placeholder='message' name="message"  rows="10"/>
                        <button type='submit'>Send</button>
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
