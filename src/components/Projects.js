import React from 'react';
import './Projects.css'

export default function Projects({projectsRef,dataAos}) {



    return (
        <section data-aos={dataAos} ref={projectsRef} id='projects' className='container'>
             <h2>Projects</h2>
            <article>
            <a href='https://idakroniczaja.github.io/Game/' target="_blank" className='singe-project' id='bird' >
              
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
            <a href='https://idakroniczaja.github.io/Game/' target="_blank" className='singe-project' id='food-and-cocktails'  >

                <h3>Food and Cocktails</h3>
                <div>
                    <p><span>Description: </span>Search for your favorite food and cocktails recipe at once. You can find different recipes for
your favorite food, and pair it with cocktails you want to make.</p>
                    <p><span>Technologies used:</span> React.js, JavaScript, Node.js, Express.js, MongoDB, Bootstrap, Spoonacular
API, thecocktaildb API</p>
                </div>

      
            </a>
            <a href='https://idakroniczaja.github.io/Game/' target="_blank" className='singe-project' id='creativeNess'  >

                <h3>CreativeNess</h3>
                <div>
                    <p><span>Description: </span>  You can post your crafts and DIY projects, see what other users posted, comment on different
posts, find events in your location you are interested in, find inspirational photos and videos.</p>
                    <p><span>Technologies used:</span> React.js, JavaScript, Node.js, Express.js, MongoDB, Bootstrap, pexels API,
predicthq API</p>
              
            </div>
            </a>

            <a href='https://idakroniczaja.github.io/Game/' target="_blank" className='singe-project' id='beauty-salon'  >
        
                <h3>Nafkar Beauty salon</h3>
                <div>
                    <p><span>Description: </span>Webpage for privately-owned beauty salon with responsive layout, mobile friendly, and full backend for owner to
    change and upload photos in gallery and change services.</p>
                    <p><span>Technologies used:</span> React.js, JavaScript, Sanity</p>
                </div>

            </a>










       
            

            </article>
        </section>
    )
}
