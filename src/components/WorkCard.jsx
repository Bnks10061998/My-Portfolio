import React from 'react'
import "./ProjectCardStyles.css"
// import prol from "../assets/startImage.jpg"
import { NavLink } from 'react-router-dom'
const WorkCard = ({imgsrc,text,title,view}) => {
  return (
    // <div className="work-container">
    //     <h1 className="project-heading">Projects</h1>
    //     <div className="project-container">
            <div className="project-card">
                <img src={imgsrc} alt="image"/>
                <h2 className="project-title">{title}</h2>
                <div className="pro-details">
                    <p>{text}</p>
                    <div className="pro-btns">
                        <NavLink to = "view" className="btn">View</NavLink>
                        <NavLink to = "view" className="btn">Source</NavLink>
                    </div>
                </div>
            
            </div>
    //     </div>
    // </div>
  )
}

export default WorkCard