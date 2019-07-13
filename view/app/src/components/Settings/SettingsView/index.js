import React from "react";

// User Settings
import UserManagement from "./ViewComponents/UserManagement";

const SettingsViewRender = ({ componentToRender }) => {
  switch (componentToRender) {
    //===================
    // User Settings
    //===================
    case "userManagement":
      return <UserManagement />;

    default:
      return <UserManagement />;
  }
};

export default SettingsViewRender;
