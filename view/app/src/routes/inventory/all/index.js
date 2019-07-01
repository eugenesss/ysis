import React, { Component } from "react";
import { connect } from "react-redux";
import { show } from "redux-modal";
import { Helmet } from "react-helmet";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
import ListViewSelector from "Components/PageTitleBar/ListViewSelector";

// Components
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import InventoryList from "Components/Inventory/InventoryList";

// Actions
import { getAllInventory, changeInvList } from "Actions";
import EditInventoryModal from "Components/Inventory/EditInventoryModal";

class ViewAllInventory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nowShowing: "All Inventory",
      options: ["All Inventory", "Warehouse 1", "Warehouse 2"]
    };
    this.handleEdit = this.handleEdit.bind(this);
  }
  componentWillMount() {
    this.props.getAllInventory();
  }
  handleEdit(id) {
    this.props.show("edit_inventory", { itemToEdit: id });
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
        <PageTitleBar
          title={
            <div className="d-flex">
              <ListViewSelector
                options={options}
                nowShowing={nowShowing}
                onChangeValue={this.props.changeInvList}
              />
            </div>
          }
        />
        <RctCollapsibleCard fullBlock>
          <InventoryList
            title={nowShowing}
            data={tableData}
            loading={loading}
            handleEdit={this.handleEdit}
          />
        </RctCollapsibleCard>
        <EditInventoryModal />
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
