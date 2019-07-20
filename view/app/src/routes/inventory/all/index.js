import React, { Component } from "react";
import { connect } from "react-redux";
import { show } from "redux-modal";
import { Helmet } from "react-helmet";
import ListViewSelector from "Components/PageTitleBar/ListViewSelector";

// Components
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import InventoryList from "Components/Inventory/InventoryList";
import EditInventoryModal from "Components/Inventory/EditInventoryModal";

// Actions
import { getAllInventory, changeInvList } from "Actions";
import ViewInventoryModal from "Components/Inventory/ViewInventoryModal";

class ViewAllInventory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nowShowing: "All Inventory",
      options: ["All Inventory", "Warehouse 1", "Warehouse 2"]
    };
    this.handleView = this.handleView.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }
  componentWillMount() {
    this.props.getAllInventory();
  }
  handleEdit(id) {
    this.props.show("edit_inventory", { itemToEdit: id });
  }
  handleView(id) {
    this.props.show("view_inventory", { itemToView: id });
  }

  render() {
    const {
      loading,
      tableData,
      nowShowing,
      options
    } = this.props.inventoryList;
    return (
      <React.Fragment>
        <Helmet>
          <title>YSIS | View All Inventory</title>
          <meta name="description" content="YSIS View All Inventory" />
        </Helmet>
        <RctCollapsibleCard fullBlock>
          <InventoryList
            title={
              <ListViewSelector
                options={options}
                nowShowing={nowShowing}
                onChangeValue={this.props.changeInvList}
              />
            }
            data={tableData}
            loading={loading}
            handleEdit={this.handleEdit}
            handleView={this.handleView}
          />
        </RctCollapsibleCard>
        <EditInventoryModal />
        <ViewInventoryModal />
      </React.Fragment>
    );
  }
}
const mapStateToProps = ({ inventoryState }) => {
  const { inventoryList } = inventoryState;
  return { inventoryList };
};

export default connect(
  mapStateToProps,
  { getAllInventory, show, changeInvList }
)(ViewAllInventory);
