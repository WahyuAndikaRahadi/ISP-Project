import React from 'react'
import Navbar from './components/Navbar'
import Home from './sections/Home'
import About from './sections/About'
import Service from './sections/Service'
import QualityAndPrice from './sections/QualityAndPrice'
import Payment from './sections/Payment'
import Contact from './sections/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Service />
      <QualityAndPrice />
      <Payment />
      <Contact />
      <Footer />
    </>
  )
}

export default App