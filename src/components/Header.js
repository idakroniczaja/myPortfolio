import React from 'react'
import "./Header.css"
import { ParallaxBanner } from 'react-scroll-parallax';




export default function Header(props) {

    return (
  <ParallaxBanner  className='header' 
  layers={[{image:props.image1, amount:1, expanded:true}]}>
        <section  ref={props.headerRef} >
        </section>
</ParallaxBanner>

    )
}
