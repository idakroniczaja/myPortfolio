import React from 'react'
import "./Header.css"





export default function Header({headerRef}) {

    return (

<section ref={headerRef} className='header'>

    <article>
        <h1>Hello, my name is Ida. <br/>
        I am full stack web developer.</h1>

        <p>“A user interface is like a joke. If you have to explain it, it’s not that good.”</p>
    </article>

    <div className='s'>
        <p>View my work</p>
        <p>Contact me</p>
    </div>
</section>

    )
}
