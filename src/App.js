import {useRef,useEffect} from 'react'
import './App.css';

import { ParallaxProvider } from 'react-scroll-parallax';

import NavBar from './components/NavBar';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact'


import image1 from './components/artem-sapegin-b18TRXc8UPQ-unsplash.jpg'
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


useEffect(()=>{
  Aos.init({ duration:2000 });
},[])


  return (
    <ParallaxProvider className="App">
   
      
            <NavBar scrollToHeader={scrollToHeader} scrollToAbout={scrollToAbout} scrollToProjects={scrollToProjects} scrollToContact={scrollToContact}  />
   
      
            <Header image1={image1} headerRef={headerRef}/>


            <AboutMe  aboutRef={aboutRef}/>
            <Projects dataAos='fade-down' projectsRef={projectsRef}/>
            <Contact  dataAos='fade-down' contactRef={contactRef}/>
        
    </ParallaxProvider>
  );
}

export default App;
