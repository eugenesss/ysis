import React from "react";

const TabsHeader = ({ title, customClasses }) => {
  return (
    <div
      className={
        "bg-secondary d-flex justify-content-between align-items-center px-20 py-10 " +
        customClasses
      }
    >
      <div style={{ width: "50%" }}>
        <h3
          className="text-light"
          style={{ width: "100%", marginTop: "0px", marginBottom: "0px" }}
        >
          {title}
        </h3>
      </div>
    </div>
  );
};

export default TabsHeader;
