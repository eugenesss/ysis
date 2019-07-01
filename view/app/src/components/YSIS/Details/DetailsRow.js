import React from "react";

const DetailsRow = ({ label, value }) => {
  return (
    <tr>
      <td className="w-20 p-0 text-right">
        <span
          style={{
            padding: "8px 17px 8px 0",
            color: "#777",
            lineHeight: "20px",
            minHeight: "17px"
          }}
        >
          {label}
        </span>
      </td>
      <td>
        <span
          style={{
            minHeight: "35px",
            padding: "6px 30px 6px 10px"
          }}
        >
          {value}
        </span>
      </td>
    </tr>
  );
};

export default DetailsRow;
