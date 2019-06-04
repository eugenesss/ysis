import React, { Component } from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";

// Components
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import InventoryList from "Components/Inventory/InventoryList";

// Actions
import { getAllInventory } from "Actions";

class ViewAllInventory extends Component {
  componentWillMount() {
    this.props.getAllInventory();
  }

  render() {
    const { allInventoryLoading, allInventory } = this.props;
    return (
      <React.Fragment>
        <Helmet>
          <title>YSIS | View All Inventory</title>
          <meta name="description" content="YSIS View All Inventory" />
        </Helmet>
        <RctCollapsibleCard fullBlock>
          <InventoryList data={allInventory} loading={allInventoryLoading} />
        </RctCollapsibleCard>
      </React.Fragment>
    );
  }
}
const mapStateToProps = ({ inventoryState }) => {
  const { allInventoryLoading, allInventory } = inventoryState;
  return { allInventoryLoading, allInventory };
};

export default connect(
  mapStateToProps,
  { getAllInventory }
)(ViewAllInventory);
