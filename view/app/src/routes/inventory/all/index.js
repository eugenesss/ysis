import React, { Component } from "react";
import { Helmet } from "react-helmet";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";

// Components
import MUIDataTable from "mui-datatables";
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";

class ViewAllInventory extends Component {
  state = {};

  reloadTable() {
    console.log("reload");
  }

  render() {
    const columns = [
      "Image",
      "Description",
      "Code",
      "Material",
      "Category",
      "Unit",
      "Quantity",
      "Quantity Per Box",
      "Location"
    ];

    const data = [];
    const options = {
      filterType: "dropdown",
      responsive: "stacked",
      download: false,
      print: false,
      textLabels: { body: { noMatch: "No Inventory to display" } },
      customToolbar: () => {
        return (
          <Tooltip id="tooltip-icon" title="Refresh">
            <IconButton
              className="text-secondary"
              aria-label="Refresh List"
              onClick={() => {
                this.reloadTable();
              }}
            >
              <i className="zmdi zmdi-refresh" />
            </IconButton>
          </Tooltip>
        );
      }
    };
    const { match } = this.props;
    return (
      <React.Fragment>
        <Helmet>
          <title>YSIS | View All Inventory</title>
          <meta name="description" content="YSIS View All Inventory" />
        </Helmet>
        <PageTitleBar title="View All Inventory" match={match} />
        <RctCollapsibleCard fullBlock>
          <MUIDataTable
            title={"Inventory list"}
            data={data}
            columns={columns}
            options={options}
          />
        </RctCollapsibleCard>
      </React.Fragment>
    );
  }
}

export default ViewAllInventory;
