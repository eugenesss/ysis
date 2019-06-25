import React from "react";
import { connectModal } from "redux-modal";
import DialogRoot from "Components/Dialog/DialogRoot";

import InventoryForm from "Components/Forms/Inventory/InventoryForm";

const EditInventoryModal = props => {
  const { show, handleHide, itemToEdit } = props;
  return (
    <DialogRoot
      show={show}
      handleHide={handleHide}
      title="Edit Inventory"
      size="lg"
    >
      <InventoryForm editItemId={itemToEdit} />
    </DialogRoot>
  );
};

export default connectModal({ name: "edit_inventory" })(EditInventoryModal);
