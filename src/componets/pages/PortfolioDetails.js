
import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import '../css/Detail.css'
import dosti from '../images/fact.png'
// import './css/Arshad.css'

function PortfolioDetails() {
  return (

    <div>
    <Header />
    <div>
    <div>
    <img src={dosti}  width={540} height={390} className="mt-5 img-fluid "></img>
    </div>
  
      {/* <h1> DostiMart</h1> */}
      {/* <h2>DostiMart(Sept 2020 – Present) – Front End Developer </h2> */}
      <div p className="details">
       
      <h2>My Work</h2>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'>Built entire Portfolio website using ReactJs & Bootstrap.</li>
          <li className='list-group-item'>Used Bootsrap Containers and its all classes</li>
          <li className='list-group-item'>Complete website is on ReactJs only.</li>
          <li className='list-group-item'>Daily Upload codes on Github</li>
          {/* <li className='list-group-item'></li>
          <li className='list-group-item'></li> */}
          <li className='list-group-item'>Optimized application with SEO for maximum speed and scalability by adding React Router components, maintaining clean and reusable code practices.</li>
          {/* <li className='list-group-item'></li> */}
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
            <span className="badge bg-primary rounded-pill">7</span>

            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">ReactJs
            <span className="badge bg-primary rounded-pill">9</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">Bootstrap
            <span className="badge bg-primary rounded-pill">10</span>
            </li>
          </ul>
      </div>
      </div>

    <Footer />

  </div>

    // <div>
    //   <Header />

    //   <div>
    //     <h1> DostiMart</h1>
    //     {/* <h2>DostiMart(Sept 2020 – Present) – Front End Developer </h2> */}
    //     <h4 className='details'>Details of my work Experience in Dostimart Website.</h4> <br/><br/> 
    //     <p className="details">
    //     -	Built entire purchase module to support back-end team for placing order. <br/><br/>
    //     -	Increased 40% speed by adding pagination on product listing, order listing page.<br/><br/>
    //     -	Consumed multiple REST APIs and attached with existing and new components to display product, order, purchase, many more listing pages. <br/><br/>
    //     -	Added JQuery validations on multiple modules as place order, add purchase and other part of admin panel. <br/><br/>
    //     -	Helped team member with developing login/register components using Material UI & Bootstrap Frameworks.<br/><br/>
    //     -	Collaboration with team members with Git and aid solving bugs.<br/><br/>
    //     -	Optimized application with SEO for maximum speed and scalability by adding React Router components, maintaining clean and reusable code practices.<br/><br/>
    //     -	Sometimes helped back-end team with SQL queries

    //     </p>
    //     </div>
    //   <Footer />

    // </div>
  )
}

export default PortfolioDetails