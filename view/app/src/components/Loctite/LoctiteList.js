import React from "react";
import { NavLink } from "react-router-dom";
import MUIDataTable from "mui-datatables";
import RctSectionLoader from "Components/RctSectionLoader/RctSectionLoader";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";

const LoctiteList = ({ data, loading, handleEdit }) => {
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
    },
    {
      label: "Actions",
      name: "pid",
      options: {
        filter: false,
        sort: false,
        customBodyRender: value => {
          return (
            <Tooltip id="tooltip-icon" title="Edit">
              <IconButton
                className="text-primary mr-2"
                aria-label="Edit"
                onClick={() => {
                  handleEdit(value);
                }}
              >
                <i className="zmdi zmdi-edit" />
              </IconButton>
            </Tooltip>
          );
        }
      }
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
