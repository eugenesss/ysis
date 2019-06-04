import React from "react";

import DialogRoot from "Components/Dialog/DialogRoot";
import AddUserForm from "Components/Forms/Setting/General/AddUserForm";

const AddUserDialog = ({ handleClose, open }) => {
  return (
    <DialogRoot
      show={open}
      handleHide={handleClose}
      size="md"
      title="Add User"
      close={false}
    >
      <AddUserForm />
    </DialogRoot>
  );
};

export default AddUserDialog;
