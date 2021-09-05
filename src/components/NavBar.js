import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import { HiMenu } from 'react-icons/hi';
import { TiTimes } from 'react-icons/ti';

import {useTransition, animated} from 'react-spring';
import './NavBar.css';

import { motion } from 'framer-motion'




export default function NavBar({scrollToHeader, scrollToAbout, scrollToProjects, scrollToContact }) {
const [toggle, setToggle]= useState(false)
const [windowWidt, setWindowWidth] = useState(window.innerWidth)
const [lastYPos, setLastYPos] = useState(0)
const [shouldShowAction, setShouldShowActions] = useState(false)

const transition = useTransition(toggle,(p)=>p,{
    from: {transform: 'scaleY(0)', transformOrigin:'top'},
    enter: { transform: 'scaleY(1) ', transformOrigin:'top'},
    leave: { transform: 'scaleY(0)', transformOrigin:'top'},
 
});

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
        animate={{height:shouldShowAction ? '100px' : '50px'}} 
        initial={{height:'100px'}} 
        transition={{height: {duration:0.5}}}
        >

        <p>Ida </p>

        <div id='burger-menu' onClick={()=>setToggle(!toggle)}>
        {toggle ? <TiTimes /> : <HiMenu />  } 
            
            
        </div>
{transition.map(({ item, props, key })=>{
            return item && <animated.ul style={props}>
            <li onClick={scrollToHeader}><Link>Home</Link></li>
            <li onClick={scrollToAbout}><Link>About</Link></li>
            <li onClick={scrollToProjects}><Link>Projects</Link></li>
            <li onClick={scrollToContact}><Link>Contact</Link></li>
            </animated.ul>
         }) 

         
         
         
         }
        
        </motion.nav>
    )
}
