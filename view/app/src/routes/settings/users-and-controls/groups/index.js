import React, { Component } from "react";
import { connect } from "react-redux";

import GroupsLayout from "Components/Setting/UserControl/Groups/GroupsLayout"

class Groups extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <GroupsLayout/>
      </React.Fragment>
    );
  }
}

export default connect(
  null
)(Groups);
