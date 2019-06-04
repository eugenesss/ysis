import React, { Component } from "react";
import { connect } from "react-redux";

import ProfileLayout from "Components/Setting/General/Profile/ProfileLayout"

class MyProfile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <ProfileLayout/>
      </React.Fragment>
    );
  }
}

export default connect(
  null
)(MyProfile);
