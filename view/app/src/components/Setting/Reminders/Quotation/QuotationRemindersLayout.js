import React from "react";

import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import QuotationReminderSettingsForm from "Components/Form/Setting/Reminders/Quotation/QuotationReminderSettingsForm"

const QuotationRemindersLayout = () => {
  return (
    <React.Fragment>
      <RctCollapsibleCard heading={"Quotation Reminders Settings"}>
        <QuotationReminderSettingsForm/>
      </RctCollapsibleCard>
    </React.Fragment>
  );
}

export default QuotationRemindersLayout;
