import React from 'react'
import './AboutMe.css'

export default function AboutMe({aboutRef}) {
    return (
        <section  ref={aboutRef} id='about' className='container'>
            <h2>about me</h2>
            <article>

                <div className='about-image'>
            
                </div> 

                <div className='about-text'>
                <p id='greeting'>Hello, my name is Ida! </p>
                I’m problem-solver passionate about creating digital experiences. 
                I'm all about combining design with web development, 
                balancing both in order to bring meaningful experiences alive. 
                If you like my work, don’t hesitate to reach out.
                <p id='signature'>Ida Kronic Zaja</p>
                </div>
            </article>
        </section>
    )
}
