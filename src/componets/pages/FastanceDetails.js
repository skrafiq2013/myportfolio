
import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import '../css/Detail.css'
import fact from '../images/fact.png'

function FastanceDetails() {
  return (
    <div>
      <Header />
      <div>
      <div>
      <img src={fact}  width={540} height={390} className="mt-5 img-fluid "></img>
      </div>
    
        {/* <h1> DostiMart</h1> */}
        {/* <h2>DostiMart(Sept 2020 – Present) – Front End Developer </h2> */}
        <div p className="details">
         
        <h2>My Work</h2>
          <ul className='list-group list-group-flush'>
            <li className='list-group-item'>Designed the webpage module.</li>
            <li className='list-group-item'>With the help of senior member's build the webpage.</li>
            <li className='list-group-item'>Consumed multiple REST APIs and attached with existing and new components to display product.</li>
            {/* <li className='list-group-item'>Added JQuery validations on multiple modules as place order, add purchase and other part of admin panel.</li> */}
            <li className='list-group-item'>Helped team member with developing components using Material UI & Bootstrap Frameworks.</li>
            <li className='list-group-item'>Collaboration with team members with Git and aid solving bugs.</li>
            <li className='list-group-item'>Optimized application with SEO for maximum speed and scalability by adding React Router components, maintaining clean and reusable code practices.</li>
            {/* <li className='list-group-item'>Sometimes helped back-end team with SQL queries</li> */}
          </ul>
        	
 
        </div>
        <div className='details'>
          
            <h2>Tech Stack</h2>
            <ul className="list-group">
              <li className="list-group-item d-flex justify-content-between align-items-center">HTML
              <span className="badge bg-primary rounded-pill">9</span></li>
              <li  className="list-group-item d-flex justify-content-between align-items-center">
                CSS
              <span className="badge bg-primary rounded-pill">10</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">JavaScript
              <span className="badge bg-primary rounded-pill">8</span>

              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">ReactJs
              <span className="badge bg-primary rounded-pill">8</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">Bootstrap
              <span className="badge bg-primary rounded-pill">10</span>
              </li>
            </ul>
        </div>
        </div>
        
      <Footer />

    </div>
  )
}

export default FastanceDetails