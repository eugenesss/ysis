import React from "react";

import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import LeadReminderSettingsForm from "Components/Form/Setting/Reminders/Lead/LeadReminderSettingsForm"

const LeadRemindersLayout = () => {
  return (
    <React.Fragment>
      <RctCollapsibleCard heading={"Lead Reminders Settings"}>
        <LeadReminderSettingsForm/>
      </RctCollapsibleCard>
    </React.Fragment>
  );
}

export default LeadRemindersLayout;
