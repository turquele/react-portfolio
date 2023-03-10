import React from "react";
import myself from "../assets/images/me.JPG"

function Header() {
  return (
  <div class="container-fluid">
    <nav class="navbar navbar-expand-lg navbar-dark">
  <div class="container flex-lg-column">
    <a class="navbar-brand mb-lg-4 mx-lg-auto" href="#Home"><span class="h3 fw-bold d-block d-lg-none">Jose Alonso</span>
    <img src={myself} class="d-none d-lg-block rounded-circle" alt="me"></img>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav ms-auto flex-lg-column text-lg-center">
        <a class="nav-link active" aria-current="page" href="/">Home</a>
        <a class="nav-link" href="/projects">Projects</a>
        <a class="nav-link" href="/contact">Contact</a>
      </div>
    </div>
  </div>
</nav>
  </div>
)};

export default Header;