/**
 * App.js Layout Start Here
 */
import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { NotificationContainer } from "react-notifications";

// rct theme provider
import RctThemeProvider from "./RctThemeProvider";

//Horizontal Layout
import HorizontalLayout from "./HorizontalLayout";

// Auth
import Login from "Routes/login";

/**
 * Initial Path To Check Whether User Is Logged In Or Not
 */
const InitialPath = ({ component: Component, ...rest, authUser }) =>
   <Route
      {...rest}
      render={props =>
         authUser
            ? <Component {...props} />
            : <Redirect
               to={{
                  pathname: '/login',
                  state: { from: props.location }
               }}
            />}
   />;

class App extends Component {
  render() {
     const { location, match, user } = this.props;
      if (location.pathname === '/') {
         if (user === null) {
            return (<Redirect to={'/login'} />);
         } else {
            return (<Redirect to={'/app/dashboard'} />);
         }
      }
    return (
      <RctThemeProvider>
        <NotificationContainer />
        <InitialPath
          path={`${match.url}app`}
          authUser={user}
          component={HorizontalLayout}
        />
        <Route path="/login" component={Login} />
      </RctThemeProvider>
    );
  }
}

// map state to props
const mapStateToProps = ({ authUser }) => {
  const { user } = authUser;
  return { user };
};

export default connect(mapStateToProps)(App);
