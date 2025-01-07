import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import AboutContent from '../components/AboutContent'
const About = () => {
  return (
    <div>
      <NavBar/>
      <Hero heading="ABOUT ME" text="I'm friendly full stack developer"/>
      <AboutContent/>
      <Footer/>
    </div>
  )
}

export default About

