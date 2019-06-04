import React, { Component } from "react";
import { connect } from "react-redux";
import { Col, Row } from "reactstrap";

import RolesList from "./RolesList";
import RoleManager from "./RoleManager";


class RolesLayout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Row>
          <Col md={3}>
            <RolesList/>
          </Col>
          <Col md={9}>
            <RoleManager/>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default connect(
  null,
  { }
)(RolesLayout);
