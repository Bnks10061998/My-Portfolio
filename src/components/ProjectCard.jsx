import React from 'react'
import "./ProjectCardStyles.css"
import WorkCard from './WorkCard'
import ProjectData from './Data'
import prol from "../assets/startImage.jpg"
import { NavLink } from 'react-router-dom'
const ProjectCard = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
            {ProjectData.map((project,index) => (
                <WorkCard key={index} imgsrc={project.img} title={project.title} text={project.text} view={project.view}/>
            ))}
        {/* <div className="project-card">
                <img src={prol} alt="image"/>
                <h2 className="project-title">Project Title</h2>
                <div className="pro-details">
                    <p>This is Text</p>
                    <div className="pro-btns">
                        <NavLink to = "url.com" className="btn">View</NavLink>
                        <NavLink to = "url.com" className="btn">Source</NavLink>
                    </div>
                </div>
            
            </div> */}
        </div>
    </div>
  )
}

export default ProjectCard