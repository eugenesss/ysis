import React, { Component } from "react";
import { Helmet } from "react-helmet";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";

//Components
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";

class NewInventory extends Component {
  state = {};

  render() {
    const { match } = this.props;
    return (
      <React.Fragment>
        <Helmet>
          <title>YSIS | Add New Item</title>
          <meta name="description" content="YSIS Dashboard" />
        </Helmet>
        <PageTitleBar title="Add New Item" match={match} />
        <RctCollapsibleCard heading="New Item">Form</RctCollapsibleCard>
      </React.Fragment>
    );
  }
}

export default NewInventory;
