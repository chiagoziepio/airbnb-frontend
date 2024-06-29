import React from 'react'
import Offer from "./Offer"
import Carousel from "./Carousel";
import Contact from "./Contact"
import Hero from "./Hero"
import "../ComponentCSS/home.css"

const Home = () => {
  return (
    <main className='home'>
      <Hero/>
      <Carousel/>
      <Offer/>
      <Contact/>
    </main>
  )
}

export default Home