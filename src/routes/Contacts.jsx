import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Form from '../components/Form'
import SocialLinks from '../components/SocialLinks'
const Contacts = () => {
  return (
    <div>
      <NavBar/>
      <Hero heading="CONTACT" text="Let's Connect"/>
      <SocialLinks/>
      <Form />
      <Footer/>
    </div>
  )
}

export default Contacts