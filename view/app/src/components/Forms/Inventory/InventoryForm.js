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
          <FormBlock label="Name" />
        </TableRow>
      </FormTable>
    );
  }
}

export default InventoryForm;
