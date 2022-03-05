import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class Table extends Component {
  render() {
    return (
      <div>
        <table>
          <th>Name:{this.props.firstName} </th>
          <th>Family:</th>
          <th>Number:</th>
          <th>Email:</th>
        </table>
      </div>
    );
  }
}

export default Table;
