import React, { Component } from "react";
import { connect } from "react-redux";
import { Scrollbars } from 'react-custom-scrollbars'
import { Col, Row } from "reactstrap";

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from "@material-ui/core/IconButton";

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import { getAllGroups, onChangeSelectedGroup } from 'Actions'

const styles = theme => ({
  root: {
    width: "100%",
    padding: 10,
  },
  listItem: {
    paddingLeft: '0 !important',
    paddingRight: 0,
  },
  paper: {
    width: "100%",
    marginBottom: "calc(20vh)",
  },
  icon: {
    height: 24,
    width: 24,
   },
});

class GroupsList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAllGroups()
  }
  
  render() {
    const { 
      classes,

      groups,
      selectedGroup,

      onChangeSelectedGroup,
     } = this.props;
    return (
      <React.Fragment>
          <Row className={"d-flex align-items-center"}>
            <Col>
              <h2 className={"p-10 pt-20 pb-10 m-0 text-center"}>Groups</h2>
            </Col>
            <Col>
              <IconButton
                className="text-primary mt-10 mr-2 float-right"
                aria-label="Add Role"
              >
                <i className={"zmdi zmdi-plus " + classes.icon} />
              </IconButton>
            </Col>
          </Row>
          <Scrollbars
              className="rct-scroll"
              autoHeight
              autoHeightMin={'90vh'}
          >
            <List
              component="nav"
              className={classes.root}
            >
              {groups.map(group => (
                <ListItem 
                  key={group.id}
                  button
                  selected={selectedGroup ? selectedGroup.id == group.id : false}
                  onClick={() => onChangeSelectedGroup(group)}
                >
                  <ListItemText primary={group.name} className={classes.listItem}/>
                </ListItem>
              ))}
            </List>
          </Scrollbars>
      </React.Fragment>
    )
  }
}

GroupsList.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = ({ groupsState }) => {
  const { groups, selectedGroup } = groupsState;
  return { groups, selectedGroup };
};

export default connect(
  mapStateToProps,
  { getAllGroups, onChangeSelectedGroup }
)(withStyles(styles)(GroupsList));
