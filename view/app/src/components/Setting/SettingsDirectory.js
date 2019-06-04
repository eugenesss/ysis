import React, { Component } from "react";
import { connect } from "react-redux";
import { Scrollbars } from 'react-custom-scrollbars'

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Paper from '@material-ui/core/Paper';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from "react-router-dom";

const styles = theme => ({
  root: {
    width: "100%",
    padding: 10,
  },
  nested: {
    paddingLeft: '0 !important',
  },
  listItem: {
    paddingLeft: '0 !important',
    paddingRight: 0,
  },
  paper: {
    marginBottom: 24
  }
});

class SettingsDirectory extends Component {
  constructor(props) {
    super(props);
    this.state = {
        openGen: true,
        openUser: true,
        openAcc: true,
        openRem: true,
    }
  }
  
  handleClick = (item) => {
    switch (item) {
      case "gen":
        this.setState(state => ({ openGen: !state.openGen }));
        break;
      case "user":
        this.setState(state => ({ openUser: !state.openUser }));
        break;
      case "acc":
        this.setState(state => ({ openAcc: !state.openAcc }));
        break;
      case "rem":
        this.setState(state => ({ openRem: !state.openRem }));
        break;
    }
  };

  handleClickItem(path) {
    this.props.history.push(path)
  }

  render() {
    const { classes, location } = this.props;
    return (
      <Paper className={classes.paper}>
        <Scrollbars
            className="rct-scroll"
            autoHeight
            autoHeightMin={'100vh'}
            // autoHeightMax={'calc(100vh - 100px)'}
        >
          <List
            component="nav"
            className={classes.root}
          >
            <ListItem button onClick={() => this.handleClick("gen")}>
              <ListItemText inset primary={"General"} className={classes.listItem}/>
              {this.state.openGen ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={this.state.openGen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button className={classes.nested} onClick={() => this.handleClickItem('/app/settings/general/my-profile')} selected={location.pathname === '/app/settings/general/my-profile'}>
                  <ListItemText inset secondary={"My Profile"} />
                </ListItem>
                <ListItem button className={classes.nested} onClick={() => this.handleClickItem('/app/settings/general/company-details')} selected={location.pathname === '/app/settings/general/company-details'}>
                  <ListItemText inset secondary={"Company Details"} />
                </ListItem>
              </List>
            </Collapse>

            <ListItem button onClick={() => this.handleClick("user")}>
              <ListItemText inset primary={"User & Controls"} className={classes.listItem}/>
              {this.state.openUser ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={this.state.openUser} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button className={classes.nested} onClick={() => this.handleClickItem('/app/settings/users-and-controls/users')} selected={location.pathname === '/app/settings/users-and-controls/users'}>
                  <ListItemText inset secondary={"Users"} />
                </ListItem>
                <ListItem button className={classes.nested} onClick={() => this.handleClickItem('/app/settings/users-and-controls/roles-and-permissions')} selected={location.pathname === '/app/settings/users-and-controls/roles-and-permissions'}>
                  <ListItemText inset secondary={"Roles & Permissions"} />
                </ListItem>
                <ListItem button className={classes.nested} onClick={() => this.handleClickItem('/app/settings/users-and-controls/groups')} selected={location.pathname === '/app/settings/users-and-controls/groups'}>
                  <ListItemText inset secondary={"Groups"} />
                </ListItem>
              </List>
            </Collapse>

            <ListItem button onClick={() => this.handleClick("acc")}>
              <ListItemText inset primary={"Accounting"} className={classes.listItem}/>
              {this.state.openAcc ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={this.state.openAcc} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button className={classes.nested} onClick={() => this.handleClickItem('/app/settings/accounting/general')} selected={location.pathname === '/app/settings/accounting/general'}>
                  <ListItemText inset secondary={"General"} />
                </ListItem>
                <ListItem button className={classes.nested} onClick={() => this.handleClickItem('/app/settings/accounting/quotation')} selected={location.pathname === '/app/settings/accounting/quotation'}>
                  <ListItemText inset secondary={"Quotation"} />
                </ListItem>
                <ListItem button className={classes.nested} onClick={() => this.handleClickItem('/app/settings/accounting/invoice')} selected={location.pathname === '/app/settings/accounting/invoice'}>
                  <ListItemText inset secondary={"Invoice"} />
                </ListItem>
                <ListItem button className={classes.nested} onClick={() => this.handleClickItem('/app/settings/accounting/credit-note')} selected={location.pathname === '/app/settings/accounting/credit-note'}>
                  <ListItemText inset secondary={"Credit Note"} />
                </ListItem>
              </List>
            </Collapse>

            <ListItem button onClick={() => this.handleClick("rem")}>
              <ListItemText inset primary={"Reminders"} className={classes.listItem}/>
              {this.state.openRem ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={this.state.openRem} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button className={classes.nested} onClick={() => this.handleClickItem('/app/settings/reminders/lead-reminders')} selected={location.pathname === '/app/settings/reminders/lead-reminders'}>
                  <ListItemText inset secondary={"Lead Reminders"} />
                </ListItem>
                <ListItem button className={classes.nested} onClick={() => this.handleClickItem('/app/settings/reminders/quotation-reminders')} selected={location.pathname === '/app/settings/reminders/quotation-reminders'}>
                  <ListItemText inset secondary={"Quotation Reminders"} />
                </ListItem>
              </List>
            </Collapse>
          </List>
        </Scrollbars>
      </Paper>
    )
  }
}

SettingsDirectory.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(
  connect( null ) (
    withStyles(styles)
    (SettingsDirectory)
  )
);
