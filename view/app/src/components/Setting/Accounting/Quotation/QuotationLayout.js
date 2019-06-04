import React from "react";

import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import QuotationSettingsForm from "Components/Form/Setting/Accounting/Quotation/QuotationSettingsForm"

const QuotationLayout = () => {
  return (
    <React.Fragment>
      <RctCollapsibleCard heading={"Quotation Settings"}>
        <QuotationSettingsForm/>
      </RctCollapsibleCard>
    </React.Fragment>
  );
}

export default QuotationLayout;
