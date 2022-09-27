import React from 'react'

function Footer() {
  return (
    <div>
        <footer className="bg-dark text-center text-white">

  <div className="container p-4 pb-0">
   <section className="mb-4">
      {/* <!-- Facebook --> */}
      <a className="btn btn-outline-light btn-floating m-1" href="/" role="button"
        ><i className="bi bi-facebook"></i></a>

      

      {/* <!-- Google --> */}
      <a className="btn btn-outline-light btn-floating m-1" href="/" role="button"
        ><i className="bi bi-google"></i></a>

      

      {/* <!-- Linkedin --> */}
      <a className="btn btn-outline-light btn-floating m-1" href="/" role="button"
        ><i className="bi bi-linkedin"></i></a>

      {/* <!-- Github --> */}
      <a className="btn btn-outline-light btn-floating m-1" href="/" role="button"
        ><i className="bi bi-github"></i></a>
    </section>
    {/* <!-- Section: Social media --> */}
  </div>
  {/* <!-- Grid container --> */}

  {/* <!-- Copyright --> */}
  <div className="text-center p-3" >
    © 2022 Copyright:
    <a className="text-white" href="/">RAFIQAHMED</a>
  </div>
  {/* <!-- Copyright --> */}
</footer>
    </div>
  )
}

export default Footer