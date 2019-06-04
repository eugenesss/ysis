import React, { Component } from "react";
import { connect } from "react-redux";
import { Col, Row } from "reactstrap";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import UserBlock from "./UserBlock";
import UserFeedBlock from "./UserFeedBlock"

import { getAllUsers, updateUserStart } from "Actions" //AuthUser

const styles = () => ({
  bannerStyle: {
    overflow: "hidden",
    objectFit: "cover"
  },
  userBlock: {
    marginTop: -50
  },
  userFeedBlock: {
    display: "block",
    marginTop: 20
  }
});

class ProfileLayout extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() { 
    this.props.getAllUsers() //AuthUser
  }

  render() {
    const { classes, me, updateUserStart } = this.props
    if(me.id)
      updateUserStart(me)
    return (
      <React.Fragment>
        <Row>
          <img src={require('Assets/img/profile-bg.jpg')} alt="profile banner" width="1920" height="300" className={classes.bannerStyle}/>
        </Row>
        <Row>
          <Col lg={4} className={classes.userBlock}>
            <UserBlock user={me}/>
          </Col>
          <Col lg={8} className={classes.userFeedBlock}>
            <UserFeedBlock/>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}


ProfileLayout.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = ({ usersState }) => {
  const { me } = usersState;
  return { me };
};

export default connect(
  mapStateToProps,
  { getAllUsers, updateUserStart }
)(withStyles(styles)(ProfileLayout));
