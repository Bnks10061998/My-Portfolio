import React from 'react'
import startImage from "../assets/startImage.jpg"
import { Link } from 'react-router-dom'
import "./HomePageStyle.css"
const HomePage = () => {
  return (
    <div class="hero">
        <div className="mask">
            <img className="intro-image" src={startImage} alt = "startImage"/>
        </div>
        <div className="content">
            <p>Hi I'm Kaviya.</p>
                <h1>I'm a Victoria based Software Developer</h1>
                <Link to = "/projects" className="btn">Projects</Link>
                <Link to = "/contacts" className="btn btn-light">Contacts</Link>
        </div>
    </div>
  )
}

export default HomePage
