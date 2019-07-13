import React, { Component } from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { show } from "redux-modal";

// Components
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import LoctiteList from "Components/Loctite/LoctiteList";
import EditLoctiteModal from "Components/Loctite/EditLoctiteModal";

// Actions
import { getAllLoctite } from "Actions";

class ViewAllLoctite extends Component {
  constructor(props) {
    super(props);
    this.handleEdit = this.handleEdit.bind(this);
  }
  componentWillMount() {
    this.props.getAllLoctite();
  }

  handleEdit(id) {
    this.props.show("edit_loctite", { itemToEdit: id });
  }

  render() {
    const { tableData, loading } = this.props.loctiteList;
    return (
      <React.Fragment>
        <Helmet>
          <title>YSIS | View Loctite</title>
        </Helmet>
        <RctCollapsibleCard fullBlock>
          <LoctiteList
            data={tableData}
            loading={loading}
            handleEdit={this.handleEdit}
          />
          <EditLoctiteModal />
        </RctCollapsibleCard>
      </React.Fragment>
    );
  }
}
const mapStateToProps = ({ loctiteState }) => {
  const { loctiteList } = loctiteState;
  return { loctiteList };
};
export default connect(
  mapStateToProps,
  { getAllLoctite, show }
)(ViewAllLoctite);
