import React, { Component } from "react";
import { connect } from "react-redux";
import { connectModal } from "redux-modal";
import DialogRoot from "Components/Dialog/DialogRoot";

import RctSectionLoader from "Components/RctSectionLoader/RctSectionLoader";
import InventoryForm from "Components/Forms/Inventory/InventoryForm";

import { startEditInventory } from "Actions";

class EditInventoryModal extends Component {
  componentWillMount() {
    this.props.startEditInventory(this.props.itemToEdit);
  }
  state = {};
  render() {
    const { show, handleHide, itemToEdit } = this.props;
    const { modalLoading } = this.props.inventoryForm;
    return (
      <DialogRoot
        show={show}
        handleHide={handleHide}
        title="Edit Inventory"
        size="lg"
      >
        {modalLoading ? <RctSectionLoader /> : <InventoryForm />}
      </DialogRoot>
    );
  }
}
const mapStateToProps = ({ inventoryState }) => {
  const { inventoryForm } = inventoryState;
  return { inventoryForm };
};

export default connect(
  mapStateToProps,
  { startEditInventory }
)(connectModal({ name: "edit_inventory" })(EditInventoryModal));
