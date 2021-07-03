import React from 'react'
import './Contact.css'

export default function Contact({contactRef}) {
    return (
        <section ref={contactRef} id='contact' className='container'>
            <h2>Contact</h2>
            <article>

                <div className='background-image'>
                    <form >
                    <h3>Send message</h3>
                    <input placeholder='your name'></input>
                    <input placeholder='your email'></input>
                    <input placeholder='message'></input>
                    <button>Send message</button>
                   
                    </form>
                </div>

            

            </article>
        </section>
    )
}
