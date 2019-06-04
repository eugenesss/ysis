import React, { Component } from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";

// Components
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import LoctiteList from "Components/Loctite/LoctiteList";

// Actions
import { getAllLoctite } from "Actions";

class ViewAllLoctite extends Component {
  componentWillMount() {
    this.props.getAllLoctite();
  }

  render() {
    const { allLoctiteLoading, allLoctite } = this.props;
    console.log(allLoctite);
    return (
      <React.Fragment>
        <Helmet>
          <title>YSIS | View Loctite</title>
        </Helmet>
        <RctCollapsibleCard fullBlock>
          <LoctiteList data={allLoctite} loading={allLoctiteLoading} />
        </RctCollapsibleCard>
      </React.Fragment>
    );
  }
}
const mapStateToProps = ({ loctiteState }) => {
  const { allLoctiteLoading, allLoctite } = loctiteState;
  return { allLoctiteLoading, allLoctite };
};
export default connect(
  mapStateToProps,
  { getAllLoctite }
)(ViewAllLoctite);
