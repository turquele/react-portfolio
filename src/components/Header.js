import React from "react";
import myself from "../assets/images/me.JPG"

function Header() {
  return (
  <header className="container-fluid">
    <nav className="navbar navbar-expand-lg navbar-dark">
  <div className="container flex-lg-column">
    <a className="navbar-brand mb-lg-4 mx-lg-auto" href="#Home"><span className="h3 fw-bold d-block d-lg-none">Jose Alonso</span>
    <img src={myself} className="d-none d-lg-block rounded-circle" alt="me"></img>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav ms-auto flex-lg-column text-lg-center">
        <a className="nav-link active" aria-current="page" href="/">Home</a>
        <a className="nav-link" href="/projects">Projects</a>
        <a className="nav-link" href="/contact">Contact</a>
      </div>
    </div>
  </div>
</nav>
  </header>
)};

export default Header;