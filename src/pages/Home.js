import React from "react";
import "./style.css";

function Home() {
  return (
    <div id="content-wrapper">
      <section id="home" className="full-height px-lg-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold">I'M A <span className="text-brand">UI/UX DESIGNER</span></h1>
              <p className="lead mt-2 mb-4">I am Jose Alonso, And I develope high performing websites</p>
              <a href="#" className="btn btn-brand me-3">Explore My Work</a>
              <a href="#" className="link-custom">Call: +44 (0) 79072 67138</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home;