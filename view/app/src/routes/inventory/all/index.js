import React, { Component } from "react";
import { connect } from "react-redux";
import { show } from "redux-modal";
import { Helmet } from "react-helmet";

// Components
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import InventoryList from "Components/Inventory/InventoryList";

// Actions
import { getAllInventory } from "Actions";
import EditInventoryModal from "Components/Inventory/EditInventoryModal";

class ViewAllInventory extends Component {
  constructor(props) {
    super(props);
    this.handleEdit = this.handleEdit.bind(this);
  }
  componentWillMount() {
    this.props.getAllInventory();
  }
  handleEdit(id) {
    this.props.show("edit_inventory", { itemToEdit: id });
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
          <InventoryList
            data={allInventory}
            loading={allInventoryLoading}
            handleEdit={this.handleEdit}
          />
        </RctCollapsibleCard>
        <EditInventoryModal />
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
  { getAllInventory, show }
)(ViewAllInventory);
