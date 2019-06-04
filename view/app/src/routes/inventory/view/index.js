import React, { Component } from "react";
import { connect } from "react-redux";

// Global Req
import { Helmet } from "react-helmet";

// Components
import RctPageLoader from "Components/RctPageLoader/RctPageLoader";
import PageErrorMsg from "Components/YSIS/ErrorMsg/PageErrorMsg";

// actions
import { viewInventory } from "Actions";

class ViewSingleInventory extends Component {
  componentWillMount() {
    var id = this.props.match.params.id;
    this.props.viewInventory(id);
  }
  render() {
    const { singleItem, singleItemLoading } = this.props;
    return singleItemLoading ? (
      <RctPageLoader />
    ) : singleItem ? (
      <React.Fragment>
        <Helmet>
          <title>YSIS | View Inventory</title>
        </Helmet>
        single inventory
      </React.Fragment>
    ) : (
      <PageErrorMsg
        heading="Not Found"
        message="This could be because of a network problem or the record might have been deleted"
      />
    );
  }
}
const mapStateToProps = ({ inventoryState }) => {
  const { singleItem, singleItemLoading } = inventoryState;
  return { singleItem, singleItemLoading };
};

export default connect(
  mapStateToProps,
  { viewInventory }
)(ViewSingleInventory);
