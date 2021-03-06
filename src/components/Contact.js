import React, {useState} from  'react'
import './Contact.css'
import emailjs from 'emailjs-com';

export default function Contact({contactRef, dataAos}) {

const [message, setMessage] = useState('Your mesage has been successfully sent')


const sendEmail = (e)=> {
e.preventDefault()
 
    emailjs.sendForm("service_aowrs29","template_lb3tbjx", e.target ,"user_DSGHm0rdiLjlkKMr2aVXe")
    .then(res=>{
        res.text==='OK' ? setMessage('OK') : setMessage('not ok')
    }).catch(err=>console.log(err.text))
    e.target.reset()
}


  
    return (
        <section data-aos={dataAos}ref={contactRef} id='contact' className='container'>
            <h2>Contact ME</h2>

            <article>

                    <form onSubmit={sendEmail}>
                        <h3>Send message</h3>
                        <input name='name' type='text' placeholder='your name'/>
                        <input name='email' type='email' placeholder='your email'/>
                        <textarea placeholder='message' name="message"  rows="10"/>
                        <button type='submit'>Send</button>
                    </form>  
             
           
                    <p id='message'>{message}</p>

                    {/* <p id='email'>so.kida@hotmail.com</p> */}
                    
               

            </article>
        </section>
    )
}
