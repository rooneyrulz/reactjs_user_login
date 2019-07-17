import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { NavItem } from "reactstrap";
import PropTypes from "prop-types";

import { logoutUser } from "../../../actions/authAction";

const NavLinks = ({ isAuthenticated, logoutUser }) => {
  const authLinks = (
    <Fragment>
      <NavItem>
        <NavLink className="nav-link" exact to="/dashboard">
          Dashboard
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          onClick={() => logoutUser()}
          className="nav-link"
          exact
          to="#!"
        >
          Sign-Out
        </NavLink>
      </NavItem>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <NavItem>
        <NavLink className="nav-link" exact to="/home">
          Home
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink className="nav-link" exact to="/about">
          About
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink className="nav-link" exact to="/sign-up">
          Sign-Up
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink className="nav-link" exact to="/sign-in">
          Sign-In
        </NavLink>
      </NavItem>
    </Fragment>
  );

  return <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>;
};

NavLinks.propTypes = {
  isAuthenticated: PropTypes.bool,
  logoutUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(NavLinks);
