import React from 'react'
import './AboutMe.css'

export default function AboutMe({aboutRef}) {
    return (
        <section  ref={aboutRef} id='about' className='container'>
            About me
        </section>
    )
}
