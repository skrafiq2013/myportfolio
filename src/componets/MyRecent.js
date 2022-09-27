import React from 'react'
import './css/Project.css' 
import logo from './images/DostiMart.png';
import fact from './images/factance.png'
import own from './images/mypage.png'
function MyRecent() {
  return (
    
    <div className="container-fluid mt-5">
    <h1 className="display-4 recent-work">My Recent Work</h1>
        <div className='row my-work'>  

             

            <div className="col-md-3">
                <div className='mt-5 mb-5 cont-1'>
                <img src={logo} width={350} className="image-fluid my-recent image" alt="hello" ></img>
                <div className="middle">
                 
                    <a className='btn btn-primary' href="/dostimart">Details</a>
                    <a className='btn btn-primary' href='https://dostimart.com/' target="_blank">Visit Website</a>
                
                </div>

                    {/* <a href='https://dostimart.com/'><h2>DostiMart</h2></a> */}
                </div>
            </div>
            <div className="col-md-3">
                <div className='mt-5 mb-5 cont-1'>
                <img src={fact} width={350} className="image-fluid my-recent image" alt="hello" ></img>
                <div className="middle">
          
                 <a className='btn btn-primary' href="/fastance">Details</a>
                 <a className='btn btn-primary' href='https://factance.com/' target="_blank">Visit Website</a>
             

                </div>   
                    {/* <h2>Factance</h2> */}
                </div>
            </div>
            <div className="col-md-3">
                <div className='mt-5 mb-5 cont-1'>
                <img src={own} width={350} className="image-fluid my-recent image" alt="hello" ></img>
                <div className="middle">
          
                 <a className='btn btn-primary' href="port">Details</a>
                 <a className='btn btn-primary'>Visit Website</a>
             

                </div>   
                    {/* <h2>Factance</h2> */}
                </div>
            </div>
            
        </div>

    </div>
     )
}

export default MyRecent