import React from "react";

import DialogRoot from "Components/Dialog/DialogRoot";
// import UserControlForm from "Components/Forms/Setting/General/UserControlForm";

const UserControlDialog = ({ handleClose, open }) => {
  return (
    <DialogRoot
      show={open}
      handleHide={handleClose}
      size="xs"
      title="User Control Settings"
    >
      {/* <UserControlForm /> */}
    </DialogRoot>
  );
};

export default UserControlDialog;
