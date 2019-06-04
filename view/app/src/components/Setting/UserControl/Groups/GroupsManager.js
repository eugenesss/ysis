import React, { Component } from "react";
import { connect } from "react-redux";
import { Col, Row } from "reactstrap";

import Checkbox from '@material-ui/core/Checkbox'
import Chip from '@material-ui/core/Chip';
import Select from '@material-ui/core/Select';
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Radio from '@material-ui/core/Radio';
import MenuItem from "@material-ui/core/MenuItem";
import ListItemText from "@material-ui/core/ListItemText";

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
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
});

class GroupsManager extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const { 
      classes,

      roles,
      selectedGroup,
     } = this.props;
    return (
      <React.Fragment>
        <div className={classes.root}>
          <Row>
            <Col md={6}>
              <TextField
                fullWidth
                required
                error={ selectedGroup ? !selectedGroup.name : false}
                disabled={!selectedGroup || selectedGroup.name == "Global"}
                id="name"
                label="Group Name"
                className={classes.textField}
                InputLabelProps={{ shrink: true }}
                value={ selectedGroup ? selectedGroup.name == "Global" ? "Global (default group applied to all roles)" : selectedGroup.name : "" }
                //onChange={(e) => this.handleOnUpdate('name', e.target.value)}
                margin="normal"
                variant="outlined"
              />
            </Col>
            <Col md={6}>
              <InputLabel htmlFor="role" style={{fontSize: "0.8rem"}}>Role</InputLabel>
              <Select
                error={roles.length == 0}
                style={{height: "40px", marginTop: "-0.5rem"}}
                multiple
                input={<Input id="role" />}
                value={ selectedGroup ?  selectedGroup.roles : [] }
                // onChange={(e) => onChangeAddUser('role', e.target.value)}
                renderValue={selected => (
                  <div className={classes.chips}>
                    {selected.map(function(value) {
                      var role = roles.find(role => role.id == value)
                      return (
                        <span>
                          { role ? (<Chip key={value} label={role.name} className={classes.chip} />) : null}
                        </span>
                      )
                    })}
                  </div>
                )}
              >
                {roles.map(function(role) {
                  return (
                    <MenuItem key={role.id} value={role.id}>
                      <Checkbox color="primary" />
                      <ListItemText primary={role.name} />
                    </MenuItem>
                  )
                })}
              </Select>
            </Col>
          </Row>
          <Row>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell>Roles</TableCell>
                  <TableCell align="center">Tier 1</TableCell>
                  <TableCell align="center">Tier 2</TableCell>
                  <TableCell align="center">Tier 3</TableCell>
                  <TableCell align="center">Admin</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                { selectedGroup &&
                  selectedGroup.roles.map(role => (
                  <TableRow className={classes.row} key={role.id}>
                    <TableCell component="th" scope="row">
                      {role.name}
                    </TableCell>
                    <TableCell align="center">
                      <Radio />
                    </TableCell>
                    <TableCell align="center">
                      <Radio />
                    </TableCell>
                    <TableCell align="center">
                      <Radio />
                    </TableCell>
                    <TableCell align="center">
                      <Radio />
                    </TableCell>
                  </TableRow>
                ))}
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

GroupsManager.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = ({ groupsState, rolesState }) => {
  const { selectedGroup } = groupsState;
  const  { roles } = rolesState;
  return { selectedGroup, roles };
};

export default connect(
  mapStateToProps,
  { }
)(withStyles(styles)(GroupsManager));
