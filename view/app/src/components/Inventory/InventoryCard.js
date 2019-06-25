import React from "react";
import {
  ViewCardLayout,
  ViewCardTitle,
  ViewCardDetails
} from "Components/YSIS/Layouts/ViewInventoryCard";

const InventoryCard = ({ name, category, stock, warehouse, rack }) => {
  return (
    <ViewCardLayout>
      <ViewCardTitle name={"name"} subHeading={["Category"]} />
      <ViewCardDetails>
        {{ title: "Stock Count", icon: "zmdi-balance", detail: "stock count" }}
        {{ title: "Warehouse", icon: "zmdi-city", detail: "warehouse" }}
        {{ title: "Rack", icon: "zmdi-storage", detail: "rack" }}
      </ViewCardDetails>
    </ViewCardLayout>
  );
};

export default InventoryCard;
