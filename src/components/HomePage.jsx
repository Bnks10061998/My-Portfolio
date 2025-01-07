import React from 'react'
import startimage from "../assets/startimage.jpg"
import { Link } from 'react-router-dom'
import "./HomePageStyle.css"
const HomePage = () => {
  return (
    <div class="hero">
        <div className="mask">
            <img className="intro-image" src={startimage} alt = "startImage"/>
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