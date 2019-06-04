import React from "react";

import TabsHeader from "Components/YSIS/Tabs/TabsHeader";
import UpdateCompanyDetailsForm from "Components/Forms/Setting/General/UpdateCompanyDetailsForm";

const SettingsTab = () => {
  return (
    <React.Fragment>
      <TabsHeader title={"Update Information"} />
      <UpdateCompanyDetailsForm />
    </React.Fragment>
  );
};

export default SettingsTab;
