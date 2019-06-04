import React, { Component } from "react";
import { connect } from "react-redux";
import { Col, Row } from "reactstrap";

import GroupsManager from "./GroupsManager"
import GroupsList from "./GroupsList";

import { getAllRoles, getAllGroups } from "Actions";

class GroupsLayout extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAllRoles()
    this.props.getAllGroups()
  }

  render() {
    return (
      <React.Fragment>
        <Row>
          <Col md={3}>
            <GroupsList/>
          </Col>
          <Col md={9}>
            <GroupsManager/>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default connect(
  null,
  { getAllRoles, getAllGroups }
)(GroupsLayout);
