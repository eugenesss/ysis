import React, { Component } from "react";
import { connect } from "react-redux";

// Global Req
import { Helmet } from "react-helmet";

// Components
import RctPageLoader from "Components/RctPageLoader/RctPageLoader";
import PageErrorMsg from "Components/YSIS/ErrorMsg/PageErrorMsg";

// actions
import { viewLoctite } from "Actions";

class ViewLoctite extends Component {
  componentWillMount() {
    var id = this.props.match.params.id;
    this.props.viewLoctite(id);
  }
  render() {
    const { singleLoctite, singleLoctiteLoading } = this.props;
    return singleLoctiteLoading ? (
      <RctPageLoader />
    ) : singleLoctite ? (
      <React.Fragment>
        <Helmet>
          <title>YSIS | View Loctite</title>
        </Helmet>
        single inventory
      </React.Fragment>
    ) : (
      <PageErrorMsg
        heading="Not Found"
        message="This could be because of a network problem or the record might have been deleted"
      />
    );
  }
}
const mapStateToProps = ({ loctiteState }) => {
  const { singleLoctite, singleLoctiteLoading } = loctiteState;
  return { singleLoctite, singleLoctiteLoading };
};

export default connect(
  mapStateToProps,
  { viewLoctite }
)(ViewLoctite);
