import {useRef,useEffect, useState} from 'react'
import './App.css';

import { ParallaxProvider } from 'react-scroll-parallax';

import NavBar from './components/NavBar';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact'


import image1 from './components/pexels-karolina-grabowska-5208871.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'

function App() {
  const headerRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);



 
  const scrollToHeader = () => headerRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
  const scrollToAbout = () => aboutRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
  const scrollToProjects = () => projectsRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
  const scrollToContact = () => contactRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });


  return (
    <ParallaxProvider className="App">
   
      
            <NavBar scrollToHeader={scrollToHeader} scrollToAbout={scrollToAbout} scrollToProjects={scrollToProjects} scrollToContact={scrollToContact}  />
   
      
            <Header headerRef={headerRef}/>


            <AboutMe  aboutRef={aboutRef}/>
            <Projects dataAos='fade-down' projectsRef={projectsRef}/>
            <Contact  dataAos='fade-down' contactRef={contactRef}/>
        
    </ParallaxProvider>
  );
}

export default App;
