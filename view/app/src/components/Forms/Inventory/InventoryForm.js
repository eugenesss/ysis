import React, { Component } from "react";
import { connect } from "react-redux";

// Components
import RctSectionLoader from "Components/RctSectionLoader/RctSectionLoader";

// Form Compnnets
import FormTable from "Components/Forms/Components/FormTable";
import FormBlock from "Components/Forms/Components/FormBlock";
import DescriptionFormInput from "Components/Forms/Components/DescriptionFormInput";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";

// Actions
import {
  submitInventory,
  clearInventoryForm,
  handleInvFormChange,
  getWarehouse
} from "Actions";

class InventoryForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {
        name: "",
        price: 0,
        code: "",
        material: "",
        category: "",
        unit: 0,
        quantity: 0,
        perbox: 0,
        rack: "",
        warehouse: "",
        description: ""
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.isDisabled = this.isDisabled.bind(this);
  }
  componentDidMount() {
    this.props.getWarehouse();
  }

  handleChange(field, value) {
    this.setState({
      ...this.state,
      item: { ...this.state.item, [field]: value }
    });
  }

  handleSubmit() {
    this.props.submitInventory(this.state.item);
  }

  isDisabled() {
    var disabled = !this.state.item.name && !this.state.item.warehouse;
    return disabled;
  }

  render() {
    const { loading } = this.props.inventoryForm;
    const {
      name,
      price,
      code,
      material,
      category,
      unit,
      quantity,
      perbox,
      rack,
      warehouse,
      description
    } = this.state.item;
    return (
      <React.Fragment>
        {loading && <RctSectionLoader />}
        <FormTable>
          <TableRow>
            <FormBlock
              value={name}
              handleChange={e => this.handleChange("name", e.target.value)}
              required
              label="Name"
            />
            <FormBlock
              value={code}
              handleChange={e => this.handleChange("code", e.target.value)}
              required
              label="Product Code"
            />
          </TableRow>
          <TableRow>
            <FormBlock
              value={material}
              handleChange={e => this.handleChange("material", e.target.value)}
              label="Material"
            />
            <FormBlock
              value={category}
              handleChange={e => this.handleChange("category", e.target.value)}
              label="Category"
            />
          </TableRow>
          <TableRow>
            <FormBlock
              value={unit}
              handleChange={e => this.handleChange("unit", e.target.value)}
              label="Unit"
              numberInput
            />
            <FormBlock
              value={quantity}
              handleChange={e => this.handleChange("quantity", e.target.value)}
              label="Quantity"
              numberInput
            />
          </TableRow>
          <TableRow>
            <FormBlock
              value={perbox}
              handleChange={e => this.handleChange("perbox", e.target.value)}
              label="Qty Per Box"
              numberInput
            />
            <FormBlock empty />
          </TableRow>
          <TableRow>
            <FormBlock
              value={rack}
              handleChange={e => this.handleChange("rack", e.target.value)}
              label="Rack"
            />
            <FormBlock
              value={warehouse}
              handleChange={e => this.handleChange("warehouse", e.target.value)}
              label="Warehouse"
              selectValues={this.props.warehouse}
              objProp="wid"
              required
            />
          </TableRow>
          <DescriptionFormInput
            handleChange={e => this.handleChange("description", e.target.value)}
            description={description}
          />
        </FormTable>
        <div className="row justify-content-end mt-30">
          <div className="col-md-3">
            <div className="d-flex justify-content-end">
              <Button
                className="text-white mr-15"
                color="default"
                variant="contained"
              >
                Cancel
              </Button>
              <Button
                disabled={this.isDisabled()}
                onClick={() => this.handleSubmit()}
                className="bg-success text-white"
                variant="contained"
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = ({ inventoryState, warehouseState }) => {
  const { inventoryForm } = inventoryState;
  const { warehouse } = warehouseState;
  return { inventoryForm, warehouse };
};

export default connect(
  mapStateToProps,
  { submitInventory, clearInventoryForm, handleInvFormChange, getWarehouse }
)(InventoryForm);
