import React from "react";
import {
  ViewCardLayout,
  ViewCardTitle,
  ViewCardDetails
} from "Components/YSIS/Layouts/ViewInventoryCard";

const LoctiteCard = ({ name, category, stock, warehouse, rack }) => {
  return (
    <ViewCardLayout>
      <ViewCardTitle name={name} subHeading={[category]} />
      <ViewCardDetails>
        {{ title: "Stock Count", icon: "zmdi-balance", detail: stock }}
        {{ title: "Warehouse", icon: "zmdi-city", detail: warehouse }}
        {{ title: "Rack", icon: "zmdi-storage", detail: rack }}
      </ViewCardDetails>
    </ViewCardLayout>
  );
};

export default LoctiteCard;
