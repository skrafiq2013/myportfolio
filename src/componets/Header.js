
import React from "react";
import logo from './images/ball.jpg';
import './css/Arshad.css'

function Header(){
    return(
<body className="body-scrollspy " data-bs-spy="scroll" data-bs-target=".navbar" data-bs-offset="50">
<nav className="navbar navbar-expand-sm navbar-dark background">
  <div className="container-fluid">
    <a className="navbar-brand" href="/" ><img src={logo} width={80}></img></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse subnavbar-right" id="mynavbar">
      <ul className="navbar-nav ">
        <li className="nav-item">
          <a className="nav-link" href="/"><h4>Home</h4></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#section1"><h4>Projects</h4></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about"><h4>About Me</h4></a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</body>
);
}
export default Header;