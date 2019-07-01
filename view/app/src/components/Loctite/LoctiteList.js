import React from "react";
import { NavLink } from "react-router-dom";
import MUIDataTable from "mui-datatables";
import RctSectionLoader from "Components/RctSectionLoader/RctSectionLoader";

const LoctiteList = ({ data, loading }) => {
  const columns = [
    {
      label: "ID",
      name: "id",
      options: { display: "excluded", filter: false, sort: false }
    },
    {
      label: "Name",
      name: "name",
      options: {
        customBodyRender: (value, tableMeta) => {
          return (
            <NavLink to={`/app/loctite/${tableMeta.rowData[0]}`}>
              {value}
            </NavLink>
          );
        }
      }
    },
    { label: "Total Stock", name: "totalStock" },
    {
      label: "Batch Number",
      name: "batchNum"
    },
    {
      label: "Quantity",
      name: "batch"
    },
    {
      label: "Expiration Date",
      name: "expiry"
    }
  ];
  const options = {
    filterType: "dropdown",
    responsive: "stacked",
    download: false,
    print: false,
    selectableRows: "none",
    textLabels: { body: { noMatch: "No Loctite to display" } }
  };
  return (
    <React.Fragment>
      <MUIDataTable
        title={"Loctite list"}
        data={data}
        columns={columns}
        options={options}
      />
      {loading && <RctSectionLoader />}
    </React.Fragment>
  );
};

export default LoctiteList;
