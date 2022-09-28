import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import '../css/Detail.css'
import rafiq from '../images/rafiqskt.jpg';
function AboutUs() {
  return (
    <div>
      <Header />
      <div>
      <img src={rafiq}  width={340} height={300} className="mt-5 img-fluid "></img>
      </div>
      <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
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
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Hobbies
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body details">
      <ul>
      <li>Playing with My kids</li>
        <li>Coding</li>
        <li>Communicate with People</li>
        <li>Learning new technologies</li>
              
   
      </ul>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
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
</div>
{/* <div className="accordion-item">
    <h2 className="accordion-header" id="headingFour">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
      Hobbies
      </button>
    </h2>
    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
      <div className="accordion-body details">
      <ul>
        <li>Playing with My kids</li>
        <li>Coding</li>
        <li>Communicate with People</li>
        <li>Learning new technologies</li>
        
              
   
      </ul>
      </div>
    </div>
  </div> */} 

      {/* <div className="details">
      <h2>Rafiq Ahmed Shaikh</h2>
      <ul>
        <li>I am a people person.</li>
        <li>I love meeting new people and learning about their lives and their backgrounds.</li>
        <li>I can almost always find common ground with strangers, and I like making people feel comfortable in my presence.</li>
        <li>I find this skill is especially helpful when kicking off projects with new clients.</li>
        <li>In my previous job, my clients’ customer satisfaction scores were 15 percent over the company average.</li>
              
   
      </ul>
      </div> */}

      <Footer />
    </div>
  )
}

export default AboutUs