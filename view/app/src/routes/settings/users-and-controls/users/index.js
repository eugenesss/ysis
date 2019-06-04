import React, { Component } from "react";
import { connect } from "react-redux";

import UsersLayout from "Components/Setting/UserControl/Users/UsersLayout"

class Users extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <UsersLayout/>
      </React.Fragment>
    );
  }
}

export default connect(
  null
)(Users);
