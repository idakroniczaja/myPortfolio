import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import { HiMenu } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

import {useTransition, animated} from 'react-spring';
import './NavBar.css';

import { motion } from 'framer-motion'




export default function NavBar({scrollToHeader, scrollToAbout, scrollToProjects, scrollToContact }) {
const [toggle, setToggle]= useState(false)
const [windowWidt, setWindowWidth] = useState(window.innerWidth)
const [lastYPos, setLastYPos] = useState(0)
const [shouldShowAction, setShouldShowActions] = useState(true)



const handleResize = () => {
    setWindowWidth(window.innerWidth);
    handleToggle()
}
const handleToggle = ()=> {
    if(window.innerWidth<1000){
                 setToggle(false)
                    }
   if(window.innerWidth>=1000){
       setToggle(true)
   }
}

useEffect(() => {
    handleResize()
      window.addEventListener('resize', handleResize)
  
  },[window.innerWidth])



useEffect(() => {

function handleScroll(){
const yPos = window.scrollY;
const isScrollingUp = yPos < lastYPos
setShouldShowActions(isScrollingUp)
setLastYPos(yPos)
}

  window.addEventListener('scroll', handleScroll, false)
return ()=>{
    window.removeEventListener('scroll', handleScroll, false)
}

  },[lastYPos])

  

    return (
        <motion.nav id='nav-bar' 
        animate={{height:shouldShowAction ? '80px' : '55px', background:shouldShowAction ? 'linear-gradient(#FFFFFF, #FFFFFF)' : 'linear-gradient(#ebe4df, #f3ede6)'}} 
        initial={{height:'88px', background:'linear-gradient(#FFFFFF, #FFFFFF)'}} 
        transition={{height: {duration:0.3}, background:{delay:0.3, duration:0.5, transitionTimingFunction: "linear"}}}
        >

        <p onClick={scrollToHeader}>ida</p>

        <div id='burger-menu' onClick={()=>setToggle(!toggle)}>
        {toggle ? <AiOutlineClose  id='burger-close'/> : <HiMenu id='burger-close'/>  } 
              
        </div>

            <motion.ul
            animate={{translateY:toggle ? '0%': '-150%'}}
                    initial={{translateY:'0%'}}
                    transition={{translateY:{duration:1}}}


            >
                <li onClick={scrollToHeader} ><Link onClick={()=>setToggle(false)} id='homeLink'>Home</Link></li>
                <li onClick={scrollToAbout}><Link onClick={()=>setToggle(false)}>About</Link></li>
                <li onClick={scrollToProjects}><Link onClick={()=>setToggle(false)}>Projects</Link></li>
                <Link onClick={()=>setToggle(false)}> <motion.li
                    onClick={scrollToContact}
                    id='contactLink'
                    animate={{backgroundColor:(shouldShowAction && toggle) ? '#f3ede6': 'transparent'}}
                    initial={{backgroundColor:'#f3ede6'}}
                    transition={{backgroundColor:{delay:0.3, duration:0.5}}}
                >
                Contact
                </motion.li></Link>
            </motion.ul>

        </motion.nav>
    )
}
