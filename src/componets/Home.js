import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Img from './Img'
import Me from './Me'
import MyRecent from './MyRecent'
import Myself from './Myself'
import Resume from './Resume'
import Work from './Work'

function Home() {
  return (
    <div>
        <Header />
        <Me />
        <Img />
        <Myself />
        <Resume />
        <Work />
        <MyRecent />
        <Footer />
    </div>
  )
}

export default Home