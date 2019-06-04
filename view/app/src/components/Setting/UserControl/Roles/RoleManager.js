import React, { Component } from "react";
import { connect } from "react-redux";
import { Col, Row } from "reactstrap";

import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from "@material-ui/core/Checkbox";

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
  root: {
    display: "block",
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  table: {
    minHeight: 0,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});

function CustomTableRow({position, name, children, classes, counter = 0, ...props}) {
  let table = []
  table.push(<TableCell component="th" scope="row" key={counter++}>{name}</TableCell>)
  for (let i = 0; i < position - 1; i++) {
    table.push(<TableCell key={counter++}/>)
  }
  table.push(<TableCell align="center" key={counter++}>{children}</TableCell>)
  for (let y = 0; y < 4 - position; y++) {
    table.push(<TableCell key={counter++}/>)
  }

  return (
    <TableRow className={classes.row} {...props} >
      {table}
    </TableRow>
  )
}

class RoleManager extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const { 
      classes,

      selectedRole,
      crudPermissions,
     } = this.props;
    return (
      <React.Fragment>
        <div className={classes.root}>
          <Row>
            <TextField
              fullWidth
              required
              error={ selectedRole ? !selectedRole.name : false}
              disabled={!selectedRole || selectedRole.name == "Member"}
              id="name"
              label="Role Name"
              className={classes.textField}
              InputLabelProps={{ shrink: true }}
              value={ selectedRole ? selectedRole.name == "Member" ? "Member (default role applied to all users)" : selectedRole.name : "Super Admin" }
              //onChange={(e) => this.handleOnUpdate('name', e.target.value)}
              margin="normal"
              variant="outlined"
            />
          </Row>
          <Row>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell>Action</TableCell>
                  <TableCell align="center">Read</TableCell>
                  <TableCell align="center">Create</TableCell>
                  <TableCell align="center">Update</TableCell>
                  <TableCell align="center">Delete</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {crudPermissions.map(permission => (
                  <TableRow className={classes.row} key={permission.action}>
                    <TableCell component="th" scope="row">
                      {permission.action}
                    </TableCell>
                    <TableCell align="center">
                      <Checkbox
                        color="primary"
                      />
                    </TableCell>
                    <TableCell align="center">
                      <Checkbox
                        color="primary"
                      />
                    </TableCell>
                    <TableCell align="center">
                      <Checkbox
                        color="primary"
                      />
                    </TableCell>
                    <TableCell align="center">
                      <Checkbox
                        color="primary"
                      />
                    </TableCell>
                  </TableRow>
                ))}
                <CustomTableRow
                  position={3}
                  name={<div style={{color: "red"}}>Give Super Admin Privileges*</div>}
                  classes={classes}
                >
                  <Checkbox
                    // checked={this.checked(`Permissions:manage`)}
                    // disabled={this.disabled(roleToManage.name, "Permissions:manage")}
                    // value={`Permissions:manage`}
                    // onChange={(e) => this.handleChange(e.target.value)}
                    color="primary"
                  /> 
                </CustomTableRow>
                <CustomTableRow
                  position={3}
                  name={<div style={{color: "red"}}>Reset User Passwords*</div>}
                  classes={classes}
                >
                  <Checkbox
                    color="primary"
                  /> 
                </CustomTableRow>
                <CustomTableRow
                  position={3}
                  name={<div style={{color: "red"}}>Manage Roles and Permissions*</div>}
                  classes={classes}
                >
                  <Checkbox
                    color="primary"
                  /> 
                </CustomTableRow>
                <CustomTableRow
                  position={3}
                  name={<span><div style={{color: "red"}}>Update User Roles*</div> <i style={{fontSize: "11px"}}>(ability to assign or update roles of a user)</i></span>}
                  classes={classes}
                >
                  <Checkbox
                    color="primary"
                  /> 
                </CustomTableRow>
              </TableBody>
            </Table>
          </Row>
          <Row>
            <Col>
              <Button
                variant="contained"
                color="secondary"
                className="text-white mb-10 mt-10"
              >
                Delete
              </Button>
            </Col>
            <Col>
              <Button
                variant="contained"
                color="primary"
                className="text-white mb-10 mt-10 float-right"
              >
                Save
              </Button>
            </Col>
          </Row>
        </div>
      </React.Fragment>
    )
  }
}

RoleManager.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = ({ rolesState }) => {
  const { selectedRole, crudPermissions } = rolesState;
  return { selectedRole, crudPermissions };
};

export default connect(
  mapStateToProps,
  { }
)(withStyles(styles)(RoleManager));
