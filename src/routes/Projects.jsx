import React from 'react'
import NavBar from '../components/NavBar'
import HomePage from '../components/HomePage'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Portfolio from '../components/Portfolio'

// import ProjectCard from '../components/ProjectCard'

const Projects = () => {
  return (
    <div>
      <NavBar/>
      <Hero heading="PROJECTS" text="Some of my works"/>
      <Portfolio/>
      {/* <ProjectCard/> */}
      <Footer/>
    </div>
  )
}

export default Projects