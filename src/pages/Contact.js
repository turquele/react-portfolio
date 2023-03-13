import React, { Component } from "react";
import "./style.css";

class Contact extends Component {
  // Setting the component's initial state
  state = {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
    const confirmation = "hello"
    this.setState({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      message: "",
    });
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div id="content-wrapper">
        <section className="full-height px-lg-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
        
        <p><a href="mailto:jose.m.alonso.g@gmail.com" target="_blank" className="link-custom">jose.m.alonso.g@gmail.com</a></p>
        <p><a href="http://www.github.com/turquele" target="_blank" className="link-custom">github/turquele</a></p>
        <p>Please contact me by e-mail or by the following contact form:</p>
        <form className="form row g-lg-3">
          <input
            value={this.state.firstName}
            name="firstName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="First Name"
          />
          <input
            value={this.state.lastName}
            name="lastName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Last Name"
          />
          <input
            value={this.state.phone}
            name="phone"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Phone"
          />
          <input
            value={this.state.email}
            name="email"
            onChange={this.handleInputChange}
            type="text"
            placeholder="e-mail"
          />
          <input
            value={this.state.message}
            name="message"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Your message"
          />
          <button className="btn btn-brand me-3" onClick={this.handleFormSubmit}>Submit</button>
        </form>
        </div>
        </div>
      </div>
    </section>
      </div>
    );
  }
}

export default Contact;