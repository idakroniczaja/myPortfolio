import React from 'react'
import "./Header.css"





export default function Header({headerRef, scrollToProjects, scrollToContact}) {

    return (

<section ref={headerRef} className='header'>

    <article>
        <h1>Hello, my name is Ida. <br/>
        I am full stack web developer.</h1>

        <p>“A user interface is like a joke. If you have to explain it, it’s not that good.”</p>
    </article>

    <div>
        <p onClick={scrollToProjects}>View my work</p>
        <p onClick={scrollToContact}> Contact me</p>
    </div>
</section>

    )
}
