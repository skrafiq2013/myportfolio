import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Img from './Img'
import Me from './Me'
import MyRecent from './MyRecent'
import Myself from './Myself'
import Resume from './Resume'
import Work from './Work'
import './css/Detail.css'

function Home() {
  return (
    <div>
        <Header />
        <div className="back">
        <Me />
        <Img />
        <Myself />
        <Resume />
        <Work />
        <MyRecent />
        <Footer />
        </div>
    </div>
  )
}

export default Home