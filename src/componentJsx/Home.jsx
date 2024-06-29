import React from 'react'
import Offer from "./Offer"
import Carousel from "./Carousel";
import Contact from "./Contact"
import Hero from "./Hero"

const Home = () => {
  return (
    <main className='home'>
      Home
      <Hero/>
      <Carousel/>
      <Offer/>
      <Contact/>
    </main>
  )
}

export default Home