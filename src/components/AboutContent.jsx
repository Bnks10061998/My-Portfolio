import { Link } from "react-router-dom"
import "./AboutContent.css"
import React from 'react'
import React1 from "../assets/startImage.jpg"
import React2 from "../assets/Chat.jpg"
const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who am I?</h1>
            <p>I am a react frontend developer. I create responsive secure websites for my clients</p>
            <Link to="/Contacts">
            <button className="btn">Contact</button></Link>

        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={React1} className="img" alt="React" />
                </div>
                <div className="img-stack bottom">
                    <img src={React2} className="img" alt="React" />
                </div>
            </div>

        </div>
    </div>
  )
}

export default AboutContent