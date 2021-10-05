import React, {useState, useEffect} from 'react';
import './Projects.css'
import { motion } from 'framer-motion'
import projects from './projects.json'



export default function Projects({projectsRef}) {

const [myProjects, setMyProjects] = useState([])
const [counter, setCounter] = useState(0)
const [shouldShowAction, setShouldShowActions] = useState(false)
const [click, setClick] = useState(1)


useEffect(()=>{
    setMyProjects(projects)
 

},[])

const handle_backward = () => {

    // setCounter(counter - 1)
    // let backwardProjects = [...myProjects]

    // //removing last element
    // backwardProjects.pop()

    // //adding on the first place
    // backwardProjects.unshift(projects[counter])

    // //setting state
    // setMyProjects(backwardProjects)

    //  //counter can't go under projects array
    // if (counter === 0){
    //     setCounter(projects.length - 1)
    // }

    setShouldShowActions(false)
    setClick(click - 1)

} 

const handle_forward = () => { 
        // setCounter(counter + 1)
        // let forwardProject = [...myProjects]

        // //removing first element
        // forwardProject.shift()

        // //adding on the last place
        // forwardProject.push(projects[counter])

        // //setting state
        // setMyProjects(forwardProject)

        // //counter can't go over length of project array

        // if (counter === projects.length - 1){
        //     setCounter(0)
        // }

        // console.log(counter)



    setShouldShowActions(true)
    setClick(click + 1)
    //if click is more that array lenth
    // do{
    // let forwardProject = [...myProjects]

    //     //removing first element
    //     forwardProject.shift()

    //     //adding on the last place
    //     forwardProject.push(projects[counter])

    //     //setting state
    //     setMyProjects(forwardProject)
    // } while (click >=3)
//  if (click >=3 ){
//     setCounter(counter + 1)
 
//     let forwardProject = [...myProjects]

//         //removing first element
//         forwardProject.shift()

//         //adding on the last place
//         forwardProject.push(projects[counter])

//         //setting state
//         setMyProjects(forwardProject)
//  }

  
}



const showProjects = () => {
    return myProjects.map((eachProject,i,arr)=>{
        return (
            <motion.div key={i} className="each_project" 
                    animate={{translateX: setShouldShowActions ? `-${600*click}px` : `${600*click}px`}} 
                    // initial={{translateX:'-130%'}} 
                    transition={{translateX: {duration:2}}}
                    >
            <div className='details'>
              <h3>{eachProject.name}</h3>
            </div>
          
        
            </motion.div>
        )
    })
}



    return (
        <section ref={projectsRef} id='projects'>
             <h2>Projects</h2>
             <div>
                <button onClick={handle_forward}>Forward</button>
                <button onClick={handle_backward}>Backward</button>
             </div>
  
            <article>
          { showProjects() }
               





            {/* <a href='https://idakroniczaja.github.io/Game/' target="_blank" className='singe-project' id='bird' >
              
                <h3>Chubby Bird Game</h3>
                <div>
                    <p><span>Description: </span>A single-player JavaScript based, created with OOP Principles. The player moves on mouse click.</p>
                    <p><span>Technologies used:</span> JavaScript, jQuery, Git, HTML, CSS</p>
                </div>
            </a>
         
            <a href='https://fit-life2.herokuapp.com' target="_blank" className='singe-project' id='fit-life' >
            
                <h3>Fit Life</h3>

                <div>
                    <p><span>Description: </span>Web app with a friendly user interface, that lets you create, read, update and delete your
favorite exercises, personalized workout routines and search for healthy recipes.</p>
                    <p><span>Technologies used:</span> JavaScript, Node.js, Express.js, MongoDB, Bootstrap, Spoonacular API, type
fit API</p>
                </div>
            </a>

            <a href='https://cocky-easley-6f6b99.netlify.app' target="_blank" className='singe-project' id='food-and-cocktails'  >
                <h3>Food and Cocktails</h3>
                <div>
                    <p><span>Description: </span>Search for your favorite food and cocktails recipe at once. You can find different recipes for
your favorite food, and pair it with cocktails you want to make.</p>
                    <p><span>Technologies used:</span> React.js, JavaScript, Node.js, Express.js, MongoDB, Bootstrap, Spoonacular
API, thecocktaildb API</p>
                </div>
            </a>

            <a href='https://creativeness.netlify.app' target="_blank" className='singe-project' id='creativeNess'  >
                <h3>CreativeNess</h3>
                <div>
                    <p><span>Description: </span>  You can post your crafts and DIY projects, see what other users posted, comment on different
posts, find events in your location you are interested in, find inspirational photos and videos.</p>
                    <p><span>Technologies used:</span> React.js, JavaScript, Node.js, Express.js, MongoDB, Bootstrap, pexels API,
predicthq API</p>
              
            </div>
            </a>

            <a href='https://nafkarbeauty.netlify.app' target="_blank" className='singe-project' id='beauty-salon'  >
                <h3>Nafkar Beauty salon</h3>
                <div>
                    <p><span>Description: </span>Webpage for privately-owned beauty salon with responsive layout, mobile friendly, and full backend for owner to
    change and upload photos in gallery and change services.</p>
                    <p><span>Technologies used:</span> React.js, JavaScript, Sanity</p>
                </div>
            </a> */}

            </article>
       
        </section>
    )
}
