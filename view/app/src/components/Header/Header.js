/**
 * App Header
 */
import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Link } from "react-router-dom";
import screenfull from "screenfull";
import Tooltip from "@material-ui/core/Tooltip";
import { withRouter } from "react-router-dom";

// actions
import { collapsedSidebarAction } from "Actions";

// components
import Notifications from "./Notifications";
import QuickLinks from "./QuickLinks";

// intl messages
import UserBlock from "./UserBlock";

class Header extends Component {
  state = {
    customizer: false,
    isMobileSearchFormVisible: false
  };

  // toggle screen full
  toggleScreenFull() {
    screenfull.toggle();
  }

  render() {
    const { horizontalMenu, location } = this.props;
    return (
      <AppBar position="static" className="rct-header">
        <Toolbar className="d-flex justify-content-between w-100 pl-0">
          <div className="d-flex align-items-center">
            <div className="site-logo">
              <Link to="/" className="logo-mini">
                <img
                  src={require("Assets/img/ys-logo-trans.png")}
                  alt="site logo"
                  width="35"
                  height="35"
                />
              </Link>
            </div>

            <ul className="list-inline mb-0 navbar-left">
              <QuickLinks />
            </ul>
          </div>
          <ul className="navbar-right list-inline mb-0">
            {/* <Notifications /> */}
            <li className="list-inline-item">
              <Tooltip title="Settings" placement="bottom">
                <IconButton aria-label="settings" href="/app/settings">
                  <i className={"zmdi zmdi-settings "} />
                </IconButton>
              </Tooltip>
            </li>
            <UserBlock />

            <li className="list-inline-item">
              <Tooltip title="Full Screen" placement="bottom">
                <IconButton
                  aria-label="settings"
                  onClick={() => this.toggleScreenFull()}
                >
                  <i className="zmdi zmdi-crop-free" />
                </IconButton>
              </Tooltip>
            </li>
          </ul>
        </Toolbar>
      </AppBar>
    );
  }
}

// map state to props
const mapStateToProps = ({ settings }) => {
  return settings;
};

export default withRouter(
  connect(
    mapStateToProps,
    {
      collapsedSidebarAction
    }
  )(Header)
);
