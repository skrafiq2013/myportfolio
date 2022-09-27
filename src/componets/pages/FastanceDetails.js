
import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import '../css/Detail.css'
// import './css/Arshad.css'

function FastanceDetails() {
  return (
    <div>
      <Header />
      <div className='conatiner'>
        <h1> DostiMart</h1>
        {/* <h2>DostiMart(Sept 2020 – Present) – Front End Developer </h2> */}
        <h4>Details of my work Experience in Factance Website.</h4>
        <p className="details">
        -	Built entire purchase module to support back-end team for placing order. <br/><br/>
        -	Increased 40% speed by adding pagination on product listing, order listing page.<br/><br/>
        -	Consumed multiple REST APIs and attached with existing and new components to display product, order, purchase, many more listing pages. <br/><br/>
        -	Added JQuery validations on multiple modules as place order, add purchase and other part of admin panel. <br/><br/>
        -	Helped team member with developing login/register components using Material UI & Bootstrap Frameworks.<br/><br/>
        -	Collaboration with team members with Git and aid solving bugs.<br/><br/>
        -	Optimized application with SEO for maximum speed and scalability by adding React Router components, maintaining clean and reusable code practices.<br/><br/>
        -	Sometimes helped back-end team with SQL queries

        </p>
        </div>
      <Footer />

    </div>
  )
}

export default FastanceDetails