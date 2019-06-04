import React from "react";

import SettingsTab from "./Tabs/SettingsTab";
import TabsWrapper from "Components/YSIS/Tabs/TabsWrapper";

const UserFeedBlock = () => {
  return (
    <React.Fragment>
      <TabsWrapper>
        <div icon="zmdi-comment text-success" label="Activity">
          <div>Activity</div>
        </div>
        <div icon="zmdi-settings text-warning" label="Settings">
          <SettingsTab />
        </div>
      </TabsWrapper>
    </React.Fragment>
  );
};

export default UserFeedBlock;
