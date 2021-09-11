import React, { useEffect, useState } from 'react'
import './AboutMe.css'

import { motion } from 'framer-motion'

export default function AboutMe({aboutRef}) {
const [lastYPos, setLastYPos] = useState(0)
const [shouldShowAction, setShouldShowActions] = useState(false)

useEffect(() => {
    function handleScroll(){
        // const yPos = window.scrollY;
        // const isScrollingUp = yPos < lastYPos
        window.scrollY>360 ? setShouldShowActions(true) : setShouldShowActions(false)
        // setLastYPos(yPos)
    }
       
      window.addEventListener('scroll', handleScroll, false)
    return ()=>{
        window.removeEventListener('scroll', handleScroll, false)
    }
 
      },[lastYPos])

//360


    return (
        <section  ref={aboutRef} id='about'>
            <motion.article
                    animate={{translateX: shouldShowAction ? '0%' : '-130%'}} 
                    initial={{translateX:'-130%'}} 
                    transition={{translateX: {duration:2}}}>
                <h2>About me</h2>
                <span>
                I’m problem-solver passionate about creating digital experiences. 
                I'm all about combining design with functionality, 
                balancing both in order to bring meaningful experiences alive. 
                If you like my work, don’t hesitate to reach out.</span>
            </motion.article>

            <div id='about-image'>
                <motion.img src='../images/about-me.jpg'
                    animate={{translateX: shouldShowAction ? '0%' : '130%'}} 
                    initial={{translateX:'130%'}} 
                    transition={{translateX: {duration:1}}}></motion.img>
                <div id='name'><p>Ida</p></div>
                <div id='background'></div>
            </div>

       

          
        </section>
    )
}

