import React, { Component } from "react";
import { connect } from "react-redux";
import { connectModal } from "redux-modal";
import DialogRoot from "Components/Dialog/DialogRoot";

import RctSectionLoader from "Components/RctSectionLoader/RctSectionLoader";

// Components
import PageErrorMsg from "Components/YSIS/ErrorMsg/PageErrorMsg";
import TabsWrapper from "Components/YSIS/Tabs/TabsWrapper";
// Inventory
import InventoryCard from "Components/Inventory/InventoryCard";
import InventoryDetails from "Components/Inventory/InventoryDetails";

import { getInventory } from "Actions";

class ViewInventoryModal extends Component {
  componentWillMount() {
    var id = this.props.itemID;
    this.props.getInventory(id);
  }
  render() {
    const { show, handleHide } = this.props;
    const { item, loading } = this.props.itemToView;
    return (
      <DialogRoot
        show={show}
        handleHide={handleHide}
        title="View Inventory"
        size="lg"
      >
        {loading ? (
          <RctSectionLoader />
        ) : item ? (
          <div className="row">
            <div className="col-md-3">
              <div>
                <InventoryCard
                  name={item.name}
                  category={item.category}
                  stock={item.quantity}
                  warehouse={item.warehouse}
                  rack={item.rack}
                />
              </div>
            </div>
            <div className="col-md-9">
              <TabsWrapper>
                <div label="Details" icon="zmdi-lamp">
                  <InventoryDetails item={item} />
                </div>
              </TabsWrapper>
            </div>
          </div>
        ) : (
          <PageErrorMsg
            heading="Not Found"
            message="This could be because of a network problem or the record might have been deleted"
          />
        )}
      </DialogRoot>
    );
  }
}
const mapStateToProps = ({ inventoryState }) => {
  const { itemToView } = inventoryState;
  return { itemToView };
};

export default connect(
  mapStateToProps,
  { getInventory }
)(connectModal({ name: "view_inventory" })(ViewInventoryModal));
