import React from 'react'
import './css/Detail.css'

function Footer() {
  return (
    <div>
        <footer className="bg-dark text-center text-white">

  <div className="container p-4 pb-0">
   <section className="mb-4">
  
  

      {/* <!-- Linkedin --> */}
      <a className="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/rafiq-ahmed-shaikh-15a39919/" target="_blank"role="button"
        ><i className="bi bi-linkedin"></i></a>

      {/* <!-- Github --> */}
      <a className="btn btn-outline-light btn-floating m-1" href="https://github.com/skrafiq2013" target="_blank" role="button"
        ><i className="bi bi-github"></i></a>
    </section>
  
  </div>
  

  {/* <!-- Copyright --> */}
  <div className="text-center p-3" >
    © 2022 Copyright: Rafiq Ahmed Shaikh
   
  </div>
  
</footer>
    </div>
  )
}

export default Footer