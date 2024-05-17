import React from 'react'
import NavBar from './components/NavBar'
import Banner from './components/Banner'
import Destinations from './components/Destinations'
import Message from './components/Message'
import Benefits from './components/Benefits'
import Contact from './components/Contact'
import Footer from '../../components/layouts/Footer'

const LandingPage = () => {
  return (
    <>
    <header>
        <NavBar />
        <Banner />
      </header>
      <main>
        <Destinations />
        <Message />
        <Benefits />
        <Contact />
      </main>
      <Footer />
    
    </>
  )
}

export default LandingPage