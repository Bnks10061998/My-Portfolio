import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Experiences from '../components/Experiences'

//import Form from '../components/Form'
const Experience = () => {
  return (
    <div>
      <NavBar/>
      <Hero heading="Experience" text=""/>
      <Experiences />
      <Footer/>
    </div>
  )
}

export default Experience