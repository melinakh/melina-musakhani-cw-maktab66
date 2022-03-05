import React, { Component } from "react";
import "./Form.css";
import Button from "react-bootstrap/esm/Button";

class Form extends Component {
  constructor(props) {
    super(props);
    // this.state = { firstName: "", lastName: "", number: "", email: "" };
    this.state = {};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.firstName);
    event.preventDefault();
  }
  render() {
    return (
      <div>
        <form>
          <label>
            Name:
            <input
              type="text"
              name="firstName"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Family:
            <input
              type="text"
              name="lastName"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Phone-number:
            <input
              type="number"
              name="number"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Email-adress:
            <input
              type="email"
              name="email"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
        </form>
        <Button onClick={this.handleSubmit}>Submit</Button>
      </div>
    );
  }
}

export default Form;
