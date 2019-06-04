import React, { Component } from "react";
import { Helmet } from "react-helmet";

//Components
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";

// form
import InventoryForm from "Components/Forms/Inventory/InventoryForm";

class NewInventory extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>YSIS | Add New Item</title>
          <meta name="description" content="YSIS Dashboard" />
        </Helmet>
        <RctCollapsibleCard heading="New Item">
          <div className="row">
            <div className="col-md-3">image upload</div>
            <div className="col-md-9">
              <InventoryForm />
            </div>
          </div>
        </RctCollapsibleCard>
      </React.Fragment>
    );
  }
}

export default NewInventory;
