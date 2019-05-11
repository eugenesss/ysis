import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { UncontrolledDropdown, DropdownToggle, DropdownMenu } from "reactstrap";

import CircularProgress from "@material-ui/core/CircularProgress";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";

import Moment from "moment";
// import UserAvatar from "Components/User/UserAvatar";
import { RctCard } from "Components/RctCard";

// import { logoutUser } from "Actions";

class UserBlock extends Component {
  state = {
    buttonLoading: false
  };

  componentWillUnmount() {
    clearTimeout(this.timer);
  }
  logoutUser() {
    this.props.logoutUser();
  }

  render() {
    const { location, user } = this.props;
    const { buttonLoading } = this.state;
    return (
      <UncontrolledDropdown nav className="list-inline-item cart-dropdown">
        <DropdownToggle nav className="p-0">
          <Tooltip title="User" placement="bottom">
            <IconButton aria-label="user">
              <i className="zmdi zmdi-face" />
            </IconButton>
          </Tooltip>
        </DropdownToggle>
        <DropdownMenu>
          <div className="dropdown-content">
            <Fragment>
              <RctCard customClasses="profile-head mb-0">
                <div className="profile-top border-bottom">
                  <div className="user-image text-center mb-15 mt-30">
                    {/*  <UserAvatar
                      customClasses="img-fluid rounded-circle rct-notify mx-auto"
                      user={user}
                      size={80}
                    /> */}
                  </div>
                  <div className="user-list-content">
                    <div className="text-center">
                      <h3 className="fw-bold">{user && user.fullName}</h3>
                      <p>
                        {user && user.role}
                        <br />
                        <small className="">
                          Member Since{" "}
                          {user && Moment(user.createdAt).fromNow()}
                        </small>
                      </p>
                      <div className="social-list clearfix mb-30">
                        <ul className="list-inline d-inline-block mb-10">
                          <li className="list-inline-item">
                            <Button
                              variant="contained"
                              color="primary"
                              className="btn bg-primary text-white"
                              onClick={() =>
                                this.props.history.push(
                                  `/ocrm/users/profile/${user.id}`
                                )
                              }
                            >
                              View Profile
                            </Button>
                          </li>
                          <li className="list-inline-item">
                            <Button
                              variant="contained"
                              color="primary"
                              className="btn bg-danger text-white"
                              disabled={buttonLoading}
                              onClick={() => this.logoutUser()}
                            >
                              Logout
                              {buttonLoading && (
                                <CircularProgress
                                  size={14}
                                  style={{ position: "absolute" }}
                                />
                              )}
                            </Button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </RctCard>
            </Fragment>
          </div>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }
}

// map state to props
const mapStateToProps = ({ settings, authUser }) => {
  const { user } = authUser;
  return { settings, user };
};

export default withRouter(
  connect(
    null,
    {}
  )(UserBlock)
);
