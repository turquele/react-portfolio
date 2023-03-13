import React from "react";
import "./style.css";

function ProjectGallery() {
  return (
    <div id="content-wrapper">
    <section className="full-height px-lg-5">
      <div className="container">
        <div className="row pb-4">
          <div className="col-lg-8">
            <h6 className="text-brand">PROJECTS</h6>
            <h1>My recent projects</h1>
          </div>
        </div>

        <div className="row gy4">

          <div className="col-md-6 p-4">
            <div className="card-custom rounded-4">
              <div className="card-custom-image rounded-4">
                <img className="rounded-4" src="https://placehold.co/600x400" alt=""></img>
              </div>
              <div className="card-custom-content">
                <h4>Music Mash</h4>
                <p>Find music and events of your favourite artists</p>
                <a href="https://github.com/rezman88/musicmash">Read More</a>
              </div>
            </div>
          </div>



          <div className="col-md-6 p-4">
            <div className="card-custom rounded-4">
              <div className="card-custom-image rounded-4">
                <img className="rounded-4" src="https://placehold.co/600x400" alt=""></img>
              </div>
              <div className="card-custom-content">
                <h4>Team profile generator</h4>
                <p>A Node.js command-line application.</p>
                <a href="https://github.com/turquele/team-profile-generator#">Read More</a>
              </div>
            </div>
          </div>



          <div className="col-md-6 p-4">
            <div className="card-custom rounded-4">
              <div className="card-custom-image rounded-4">
                <img className="rounded-4" src="https://placehold.co/600x400" alt=""></img>
              </div>
              <div className="card-custom-content">
                <h4>Password generator</h4>
                <p>A basic javascript html generator</p>
                <a href="https://github.com/turquele/password-generator">Read More</a>
              </div>
            </div>
          </div>



          <div className="col-md-6 p-4">
            <div className="card-custom rounded-4">
              <div className="card-custom-image rounded-4">
                <img className="rounded-4" src="https://placehold.co/600x400" alt=""></img>
              </div>
              <div className="card-custom-content">
                <h4>Weather Dashboard</h4>
                <p>A dashboard showing the weather of 6 different cities.</p>
                <a href="https://github.com/turquele/weather-dashboard">Read More</a>
              </div>
            </div>
          </div>


          <div className="col-md-6 p-4">
            <div className="card-custom rounded-4">
              <div className="card-custom-image rounded-4">
                <img className="rounded-4" src="https://placehold.co/600x400" alt=""></img>
              </div>
              <div className="card-custom-content">
                <h4>Work Day Scheduler</h4>
                <p>A basic work agenda for the day showing incoming and past tasks.</p>
                <a href="https://github.com/turquele/Work-day-scheduler">Read More</a>
              </div>
            </div>
          </div>

          <div className="col-md-6 p-4">
            <div className="card-custom rounded-4">
              <div className="card-custom-image rounded-4">
                <img className="rounded-4" src="https://placehold.co/600x400" alt=""></img>
              </div>
              <div className="card-custom-content">
                <h4>Code-Quiz</h4>
                <p>A quiz-game developed mainly in javaScript. </p>
                <a href="https://github.com/turquele/Code-Quiz">Read More</a>
              </div>
            </div>
          </div>

          </div>




      </div>
    </section>
  </div>
  );
}

export default ProjectGallery;