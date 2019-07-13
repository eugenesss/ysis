import React, { Component } from "react";
import { connect } from "react-redux";
import { show } from "redux-modal";
// Global Req
import { Helmet } from "react-helmet";
// Components
import RctPageLoader from "Components/RctPageLoader/RctPageLoader";
import PageErrorMsg from "Components/YSIS/ErrorMsg/PageErrorMsg";
import TabsWrapper from "Components/YSIS/Tabs/TabsWrapper";
import ViewActionBox from "Components/YSIS/ViewActionBox";
import EditInventoryModal from "Components/Inventory/EditInventoryModal";
// Inventory
import InventoryCard from "Components/Inventory/InventoryCard";
import InventoryDetails from "Components/Inventory/InventoryDetails";
// actions
import { getInventory } from "Actions";

class ViewSingleInventory extends Component {
  constructor(props) {
    super(props);
    this.edit = this.edit.bind(this);
    this.delete = this.delete.bind(this);
  }
  componentWillMount() {
    var id = this.props.match.params.id;
    this.props.getInventory(id);
  }

  edit(item) {
    this.props.show("edit_inventory", { itemToEdit: item.pid });
  }

  delete(item) {
    this.props.show("alert_delete", {
      name: item.name,
      action: () => this.handleDelete(item.pid)
    });
  }
  handleDelete(id) {
    console.log(`delete ${id}`);
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
              <InventoryCard
                name={item.name}
                category={item.category}
                stock={item.quantity}
                warehouse={item.warehouse}
                rack={item.rack}
              />
              <ViewActionBox>
                {{
                  label: "Edit",
                  icon: "zmdi-edit",
                  color: "primary",
                  onClick: () => this.edit(item)
                }}
                {{
                  label: "Delete",
                  icon: "zmdi-delete",
                  customClasses: "bg-danger text-white",
                  onClick: () => this.delete(item)
                }}
              </ViewActionBox>
            </div>
          </div>
          <div className="col-md-9">
            <TabsWrapper>
              <div label="Details" icon="zmdi-lamp">
                <InventoryDetails item={item} />
              </div>
            </TabsWrapper>
          </div>
        </div>
        <EditInventoryModal />
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
  { getInventory, show }
)(ViewSingleInventory);
