import React from 'react'
import AboutUs from './AboutUs'
import Footer from './Footer'
import Header from './Header'
import Nav from './Nav/Nav'
import Reviews from './Reviews'
import WhatWeDo from './WhatWeDo'

const Home = () => {
  return (
    <>
        <Nav  />
        <Header  />
        <WhatWeDo  />
        <AboutUs  />
        <Reviews  />
        <Footer  />
    </>
  )
}

export default Home