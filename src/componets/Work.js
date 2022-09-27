import React from 'react'
import logo1 from './images/eduction.jpg'
import logo2 from './images/exp.jpg'
import './css/Project.css'

function Work() {
    return (
        
        <div className='row mt-5 d-flex justify-content-center'>
            <div className="card col-md-5 m-2"   >
                <div className="card-body hght">
                    <img src={logo1} width={100} className="img-fluid"></img>
                    <h2 className="card-title mt-3">EDUCATION</h2>
                    <h4 className='mt-5'>Bachlore of Science (Computers)</h4>
                    <p>Swami Ramanad Teerth Marthwada Univeristy, Nanded </p>
                    
                </div>
            </div>
            <div className="card col-md-5 m-2"   >
                <div className="card-body hght">
                <img src={logo2} width={100} className="img-fluid"></img>
                    <h2 className="card-title mt-3">EXPERIENCE</h2>
                    <ul className='mt-5'>
                        <li>
                        <p className=" card-subtitle mb-2  mt-4">DostiMart-  Frontend Developer (Sept-2020 Till Now)</p>
                        
                        </li>
                        <li>
                        <p className="card-subtitle mb-2  mt-4">HCL Services Ltd- Sr. Associate (May-2010 To Oct-2016)</p>
                        
                        </li>
                        <li>
                        <p className="card-subtitle mb-2  mt-4">IQRA Computers- Hw/Nw Eng. (Jan-2009 To Apr-2010)</p>   
                        
                        </li>
                    </ul>
                   
                </div>
            </div>
                    </div>
    )
}


export default Work
