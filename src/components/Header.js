import React from 'react'
import "./Header.css"
export default function Header({headerRef}) {
    return (
        <section ref={headerRef} id='header' className='container'>
            Header
        </section>
    )
}
