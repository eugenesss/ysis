import React from "react";

import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import GeneralAccountingSettingsForm from "Components/Form/Setting/Accounting/General/GeneralAccountingSettingsForm"

const CreditNoteLayout = () => {
  return (
    <React.Fragment>
      <RctCollapsibleCard heading={"General Accounting Settings"}>
        <GeneralAccountingSettingsForm/>
      </RctCollapsibleCard>
    </React.Fragment>
  );
}

export default CreditNoteLayout;
