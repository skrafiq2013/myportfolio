import React from 'react'
import logo1 from './images/eduction.jpg'
import logo2 from './images/exp.jpg'
import './css/Resume.css'

function Resume() {
    return (
        <section className="d-flex justify-content-center">
        <div className="row d-flex justify-content-around"  >
            <div className="card col-md-3"   >
            <div className="column"><span className="fa-stack fa-2x"><i className="fa-solid fa-circle fa-stack-2x has-text-success"></i><i className="fa-light fa-layer-plus fa-stack-1x has-text-dark"></i></span>
                <h3 className="mt-5">Enthusiastic</h3>
                <p>I am Passionate about to invest, Intraday, Swing trading in the Stock Market </p>
                <p className="list-title has-text-primary has-text-weight-normal p-text">Things I enjoy in trading </p>
                <p>Intraday, BTST, Swing Trading, Long term holding.</p>
                <p className="list-title has-text-primary has-text-weight-normal p-text">App used :</p>
                <ul>
                  <li>Zerodha</li>
                  <li>Angel</li>
                  <li>Tradingview</li>
                  <li>Stockedge</li>
                  {/* <li>Sketch</li>
                  <li>Webflow</li> */}
                </ul>
              </div>
            </div>    
                <div className="card col-md-3"   >
                <div className="column"><span className="fa-stack fa-2x"><i className="fa-solid fa-circle fa-stack-2x has-text-success"></i><i className="fa-light fa-square-terminal fa-stack-1x has-text-dark"></i></span>
                <h3 className="mt-5">Frontend Developer</h3>
                <p>I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
                <p className="list-title has-text-primary has-text-weight-normal p-text">Languages I speak:</p>
                <p>HTML, CSS, JavaScript,  JQuery, ReactJs, TypeScript, Sass, Redux </p>
                <p className="list-title has-text-primary has-text-weight-normal p-text text-center">Dev Tools:</p>
                <ul>
                  <li>VS Code</li>
                  <li>Bootstrap</li>
                  <li>Github</li>
                </ul>
              </div>
                </div>
                <div className="card col-md-3"   >
                <div className="column"><span className="fa-stack fa-2x"><i className="fa-solid fa-circle fa-stack-2x has-text-success"></i><i className="fa-light fa-square-terminal fa-stack-1x has-text-dark"></i></span>
                <h3 className="mt-5">Want's To Learn</h3>
                <p>I want to learn new Technologies.</p>
                <br/>
                
                <p className="list-title p-text">New Tech Stack Learning</p>
                <ul>
                  <li>Angular</li>
                  <li>React.Native</li>
                  <li>Node.Js</li>
                  <li>Mongo.DB</li>
                                
                </ul>
              </div>
              </div>

                {/* <div className="card col-md-3"   >
                    <div className="card-body">
                      </div>
                </div> */}
        </div>
        </section>
    )

}

export default Resume