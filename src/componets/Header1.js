import React from "react";
import logo from './ball.jpg';
import './Arshad.css'

function Header1 (){
    return(

<nav className="navbar navbar-expand-sm navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/" ><img src={logo} width={80}></img></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse subnavbar-right" id="mynavbar">
      <ul className="navbar-nav ">
        <li className="nav-item">
          <a className="nav-link" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Projects</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">About Me</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
);
}
export default Header1;