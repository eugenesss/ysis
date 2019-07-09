import React, { Component } from "react";
import { connect } from "react-redux";

// Global Req
import { Helmet } from "react-helmet";

// Components
import RctPageLoader from "Components/RctPageLoader/RctPageLoader";
import PageErrorMsg from "Components/YSIS/ErrorMsg/PageErrorMsg";
import TabsWrapper from "Components/YSIS/Tabs/TabsWrapper";
import ViewActionBox from "Components/YSIS/ViewActionBox";

// actions
import { viewLoctite } from "Actions";

class ViewLoctite extends Component {
  componentWillMount() {
    var id = this.props.match.params.id;
    this.props.viewLoctite(id);
  }
  render() {
    const { loctite, loading } = this.props.loctiteToView;
    return loading ? (
      <RctPageLoader />
    ) : loctite ? (
      <React.Fragment>
        <Helmet>
          <title>YSIS | View Loctite</title>
        </Helmet>
        <div className="row">
          <div className="col-md-3">
            <div>
              card
              <ViewActionBox>
                {{
                  label: "Edit",
                  icon: "zmdi-edit",
                  color: "primary"
                  //onClick: () => this.edit(item)
                }}
                {{
                  label: "Delete",
                  icon: "zmdi-delete",
                  color: "inherit"
                  //onClick: () => this.delete(item)
                }}
              </ViewActionBox>
            </div>
          </div>
          <div className="col-md-9">
            <TabsWrapper>
              <div label="Details" icon="zmdi-lamp">
                details
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
const mapStateToProps = ({ loctiteState }) => {
  const { loctiteToView } = loctiteState;
  return { loctiteToView };
};

export default connect(
  mapStateToProps,
  { viewLoctite }
)(ViewLoctite);
