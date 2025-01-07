import React from 'react'
import "./HeroStyles.css"
const Hero = (props) => {
  return (
    <div className="hero">
        <div className="heading">
            <h1>{props.heading}</h1>
            <p>{props.text}</p>
        </div>
    </div>
  )
}

export default Hero