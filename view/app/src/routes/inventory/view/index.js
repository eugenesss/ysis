import React, { Component } from "react";
import { connect } from "react-redux";
// Global Req
import { Helmet } from "react-helmet";
// Components
import RctPageLoader from "Components/RctPageLoader/RctPageLoader";
import PageErrorMsg from "Components/YSIS/ErrorMsg/PageErrorMsg";
import TabsWrapper from "Components/YSIS/Tabs/TabsWrapper";
import ViewActionBox from "Components/YSIS/ViewActionBox";
// Inventory
import InventoryCard from "Components/Inventory/InventoryCard";
import InventoryDetails from "Components/Inventory/InventoryDetails";
// actions
import { getInventory } from "Actions";

class ViewSingleInventory extends Component {
  componentWillMount() {
    var id = this.props.match.params.id;
    this.props.getInventory(id);
  }
  render() {
    const { item, loading } = this.props.itemToView;
    return loading ? (
      <RctPageLoader />
    ) : item ? (
      <React.Fragment>
        <Helmet>
          <title>YSIS | View Inventory</title>
        </Helmet>
        <div className="row">
          <div className="col-md-3">
            <div>
              <InventoryCard />
              <ViewActionBox>{{ label: "Edit" }}</ViewActionBox>
            </div>
          </div>
          <div className="col-md-9">
            <TabsWrapper>
              <div label="Details" icon="zmdi-lamp">
                <InventoryDetails item={item} />
              </div>
              <div label="Notes" icon="zmdi-book">
                Notes
              </div>
            </TabsWrapper>
          </div>
        </div>
      </React.Fragment>
    ) : (
      <PageErrorMsg
        heading="Not Found"
        message="This could be because of a network problem or the record might have been deleted"
      />
    );
  }
}
const mapStateToProps = ({ inventoryState }) => {
  const { itemToView } = inventoryState;
  return { itemToView };
};

export default connect(
  mapStateToProps,
  { getInventory }
)(ViewSingleInventory);
