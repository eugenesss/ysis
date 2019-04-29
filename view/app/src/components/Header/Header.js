/**
 * App Header
 */
import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Link } from "react-router-dom";
import screenfull from "screenfull";
import Tooltip from "@material-ui/core/Tooltip";
import MenuIcon from "@material-ui/icons/Menu";
import { withRouter } from "react-router-dom";
import $ from "jquery";

// actions
import { collapsedSidebarAction } from "Actions";

// helpers
import { getAppLayout } from "Helpers/helpers";

// components
import Notifications from "./Notifications";
import QuickLinks from "./QuickLinks";

// intl messages
import IntlMessages from "Util/IntlMessages";

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
            {horizontalMenu && (
              <div className="site-logo">
                <Link to="/" className="logo-mini">
                  <img
                    src={require("Assets/img/appLogo.png")}
                    className="mr-15"
                    alt="site logo"
                    width="35"
                    height="35"
                  />
                </Link>
                <Link to="/" className="logo-normal">
                  <img
                    src={require("Assets/img/appLogoText.png")}
                    className="img-fluid"
                    alt="site-logo"
                    width="67"
                    height="17"
                  />
                </Link>
              </div>
            )}

            <ul className="list-inline mb-0 navbar-left">
              <QuickLinks />
            </ul>
          </div>
          <ul className="navbar-right list-inline mb-0">
            <Notifications />
            <Notifications />
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
