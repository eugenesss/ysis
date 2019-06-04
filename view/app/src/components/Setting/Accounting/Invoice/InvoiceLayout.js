import React from "react";

import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import InvoiceSettingsForm from "Components/Form/Setting/Accounting/Invoice/InvoiceSettingsForm"

const InvoiceLayout = () => {
  return (
    <React.Fragment>
      <RctCollapsibleCard heading={"Invoice Settings"}>
        <InvoiceSettingsForm/>
      </RctCollapsibleCard>
    </React.Fragment>
  );
}

export default InvoiceLayout;
