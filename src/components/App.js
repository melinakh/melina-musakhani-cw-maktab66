import React, { Component } from "react";
import Form from "./Form";
import Table from "./Table";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div>
        <Form />
        <Table />
      </div>
    );
  }
}

export default App;
