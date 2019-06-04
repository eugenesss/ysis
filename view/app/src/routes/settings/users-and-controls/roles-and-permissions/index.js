import React, { Component } from "react";
import { connect } from "react-redux";

import RolesLayout from "Components/Setting/UserControl/Roles/RolesLayout"

class RolesAndPermissions extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <RolesLayout/>
      </React.Fragment>
    );
  }
}

export default connect(
  null
)(RolesAndPermissions);
