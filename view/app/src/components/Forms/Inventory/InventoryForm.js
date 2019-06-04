import React, { Component } from "react";

// Form Compnnets
import FormTable from "Components/Forms/Components/FormTable";
import FormBlock from "Components/Forms/Components/FormBlock";
import TableRow from "@material-ui/core/TableRow";

class InventoryForm extends Component {
  state = {};
  render() {
    return (
      <FormTable>
        <TableRow>
          <FormBlock label="Name" />
          <FormBlock label="Product Code" />
        </TableRow>
        <TableRow>
          <FormBlock label="Material" />
          <FormBlock label="Category" />
        </TableRow>
        <TableRow>
          <FormBlock label="Unit" />
          <FormBlock label="Quantity" />
        </TableRow>
        <TableRow>
          <FormBlock label="Qty Per Box" />
          <FormBlock label="Total Quantity" />
        </TableRow>
        <TableRow>
          <FormBlock label="Rack" />
          <FormBlock label="Warehouse" />
        </TableRow>
      </FormTable>
    );
  }
}

export default InventoryForm;
