import React from "react";

import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import CreditNoteSettingsForm from "Components/Form/Setting/Accounting/CreditNote/CreditNoteSettingsForm"

const CreditNoteLayout = () => {
  return (
    <React.Fragment>
      <RctCollapsibleCard heading={"Credit Note Settings"}>
        <CreditNoteSettingsForm/>
      </RctCollapsibleCard>
    </React.Fragment>
  );
}

export default CreditNoteLayout;
