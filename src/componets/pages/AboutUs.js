import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import '../css/Detail.css'
import rafiq from '../images/rafiqskt.jpg';
function AboutUs() {
  return (
    <div>
      <Header />
      <div className='cont-back'>
      <div className='container'>
      <div>
          <img src={rafiq}  width={240} height={250} className="mt-5 img-fluid "></img>
          <h1 className="display-2 mb-4 ">Hi, I am Rafiq Ahmed Shaikh</h1> 
      </div>
      <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button head" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Family Comes First
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body details">
      <ul>
        <li> Family is the primary source of learning.</li>
        <li>Family provides enormous positive energy and can make you conquer many things.</li>
        <li>A family gives us stability in various ways.</li>
        <li>A family makes us responsible for our duty.</li>
        <li>Whenever we are in a problem of any kind, the family becomes a helping hand for us.</li>
        <li>Family is the canvas through which we paint our world.</li>     
   
      </ul>  
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed head" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Hobbies
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body details">
      <ul>
      <li>Playing with My kids</li>
        <li>Coding</li>
        <li>StockMarket</li>
        <li>Communicate with People</li>
        <li>Learning new technologies</li>
              
   
      </ul>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed head" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Tech Stacks
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body details" >
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>ReactJs</li>
        <li>Bootstrap</li>
        <li>Github</li>
        <li>Redux</li>      
        
      </ul>
      </div>
    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header" id="heading4">
      <button className="accordion-button collapsed head" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
        Connect with me
      </button>
    </h2>
    <div id="collapse4" className="accordion-collapse collapse" aria-labelledby="heading4" data-bs-parent="#accordionExample">
      <div className="accordion-body details" >
        I will be happy to talk you. Feel free to contact me. <br />
        <a href="https://www.linkedin.com/in/rafiq-ahmed-shaikh-15a39919" target="_blank" className="btn btn-primary linkedin">LinkedIn</a>
        <a href="mailto: skrafiq2013@gmail.com" target="_blank" className="btn btn-primary gmail">Gmail</a>
        <a href="https://github.com/skrafiq2013" target="_blank" className="btn btn-primary github">GitHub</a>
        
      </div>
    </div>
  </div>

</div>
 
      </div> <br />
      </div>
      <Footer />
    </div>
  )
}

export default AboutUs