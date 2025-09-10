import React from 'react'
import './home.css'

import Navbar from '../../Components/Navbar/Navbar'
import Hero from '../../Components/Hero/Hero'
import Aboutus from '../../Components/AboutUs/Aboutus'
import Work from '../../Components/WorkSection/work'
import Services from '../../Components/Services/service'
import FurnitureSection from '../../Components/FurnitureSection/furnituresection'
import Letschat from '../../Components/Letschat/letschat'
import Footer from '../../Components/Footer/footer'

const home = () => {
  return (
   <>
      <Navbar/>
      <Hero/>
      <Aboutus/>
      <Work/>
      <Services/>
      <FurnitureSection/>
      <Letschat/>
      <Footer/>
   </>
  )
}

export default home
