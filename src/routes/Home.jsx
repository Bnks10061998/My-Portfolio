import React from 'react'
import NavBar from '../components/NavBar'
import HomePage from '../components/HomePage'
import Footer from '../components/Footer'
// import ProjectCard from '../components/ProjectCard'
// import SocialLinks from '../components/SocialLinks'

const Home = () => {
  return (
    <div>
        <NavBar/>
        <HomePage/>
        
        {/* <ProjectCard /> */}
        <Footer/>
    </div>
  )
}

export default Home