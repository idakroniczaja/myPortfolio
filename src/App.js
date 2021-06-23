import {useRef,forwardRef} from 'react'
import './App.css';
import NavBar from './components/NavBar';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact'



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
    <div className="App">
    <NavBar scrollToHeader={scrollToHeader} scrollToAbout={scrollToAbout} scrollToProjects={scrollToProjects} scrollToContact={scrollToContact}  />
    <Header headerRef={headerRef}/>
    <AboutMe aboutRef={aboutRef}/>
    <Projects projectsRef={projectsRef}/>
    <Contact contactRef={contactRef}/>
     
    </div>
  );
}

export default App;
