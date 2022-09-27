import React from 'react'
import hero from './images/hero-devices.svg'
import ars from './images/rafique.jpg'

function Img() {
  return (
    <div>
      <div>
      <img src={ars}  width={350} className="mt-5 img-fluid "></img>
      </div>
    
    <div >
        <img src={hero}  width={1000} className="mt-5 img-fluid"></img>
    </div>
    </div>
  )
}

export default Img