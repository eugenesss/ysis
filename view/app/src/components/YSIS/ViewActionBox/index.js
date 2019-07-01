import React from "react";
import Button from "@material-ui/core";

const ViewActionBox = ({ children }) => {
  return (
    <div className="rct-block">
      {children.length > 1 ? (
        children.map((child, key) => {
          return (
            <Button key={key} className="mb-10" color="primary">
              {child.label}
            </Button>
          );
        })
      ) : (
        <Button className="mb-10" color="primary">
          label
        </Button>
      )}
    </div>
  );
};

export default ViewActionBox;
