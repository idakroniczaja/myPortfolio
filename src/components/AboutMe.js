import React, { useEffect } from 'react'
import './AboutMe.css'

import Aos from 'aos'
import 'aos/dist/aos.css'

export default function AboutMe({aboutRef}) {


    useEffect(() => {
        Aos.init({duration:2000})
    }, [])


    return (
        <section  ref={aboutRef} id='about'>
            <article>
                <h2>About me</h2>
                <span>
                I’m problem-solver passionate about creating digital experiences. 
                I'm all about combining design with functionality, 
                balancing both in order to bring meaningful experiences alive. 
                If you like my work, don’t hesitate to reach out.</span>
            </article>

            <div id='about-image'>
            
                <img src='../images/about-me.jpg'></img>
                <div id='name'><p>Ida</p></div>
                <div id='background'></div>
            </div>

       

          
        </section>
    )
}

