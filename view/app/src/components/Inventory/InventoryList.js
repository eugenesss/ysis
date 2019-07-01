import React from "react";
import { NavLink } from "react-router-dom";
import MUIDataTable from "mui-datatables";
import RctSectionLoader from "Components/RctSectionLoader/RctSectionLoader";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";

const InventoryList = ({ title, data, loading, handleEdit }) => {
  const columns = [
    {
      label: "ID",
      name: "pid",
      options: { display: "excluded", filter: false, sort: false }
    },
    {
      label: "Name",
      name: "name",
      options: {
        customBodyRender: (value, tableMeta) => {
          return (
            <NavLink to={`/app/inventory/${tableMeta.rowData[0]}`}>
              {value}
            </NavLink>
          );
        }
      }
    },
    { label: "Code", name: "code" },
    {
      label: "Material",
      name: "material"
    },
    {
      label: "Category",
      name: "category"
    },
    {
      label: "Unit",
      name: "unit"
    },
    {
      label: "Quantity",
      name: "quantity"
    },
    {
      label: "Quantity Per Box",
      name: "qtyPerBox"
    },
    {
      label: "Rack",
      name: "rack"
    },
    {
      label: "Warehouse",
      name: "warehouse"
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
                aria-label="Edit Account"
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
    textLabels: { body: { noMatch: "No Inventory to display" } }
  };
  return (
    <React.Fragment>
      <MUIDataTable
        title={title}
        data={data}
        columns={columns}
        options={options}
      />
      {loading && <RctSectionLoader />}
    </React.Fragment>
  );
};

export default InventoryList;
