import React, { Component } from "react";
import { Helmet } from "react-helmet";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";

// Components
import MUIDataTable from "mui-datatables";
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";

class ViewAllLoctite extends Component {
  state = {};

  reloadTable() {
    console.log("reload");
  }

  render() {
    const columns = [
      "Image",
      "Name",
      "Total Stock Count",
      "Batch 1",
      "Expiration Date",
      "Batch 2",
      "Expiration Date",
      "Batch 3",
      "Expiration Date"
    ];

    const data = [
      [
        "LOCTITE THREADLOCKER  319 (50ML)",
        20,
        50,
        30,
        "19/4/20",
        10,
        "19/4/21",
        10,
        "19/4/22"
      ]
    ];
    const options = {
      filterType: "dropdown",
      responsive: "stacked",
      download: false,
      print: false,
      textLabels: { body: { noMatch: "No Loctite to display" } },
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
    return (
      <React.Fragment>
        <Helmet>
          <title>YSIS | View Loctite</title>
        </Helmet>
        <PageTitleBar title="View Loctite" />
        <RctCollapsibleCard fullBlock>
          <MUIDataTable
            title={"Loctite list"}
            data={data}
            columns={columns}
            options={options}
          />
        </RctCollapsibleCard>
      </React.Fragment>
    );
  }
}

export default ViewAllLoctite;
