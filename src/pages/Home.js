import React from "react";
import "./style.css";

function Home() {
  return (
    <div id="content-wrapper">
      <section id="home" className="full-height px-lg-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold">UI/UX <span className="text-brand">DESIGNER</span></h1>
              <p className="lead mt-2 mb-4">I am Jose Alonso, I develope beautiful high performing websites</p>
              <a href="/projects" className="btn btn-brand me-3">Explore My Work</a>
              <a href="#" className="link-custom">Phone: +44 (0) 79072 67138</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home;