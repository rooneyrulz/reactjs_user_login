import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// SPINNER
import Spinner from "../common/spinner/Spinner";

const Dashboard = ({ auth: { isAuthenticated, loading }, history }) => {
  if (!isAuthenticated) history.push("/sign-in");
  return loading ? (
    <Spinner />
  ) : (
    <div id="Dashboard">
      <h1 className="display-4">Dashboard</h1>
    </div>
  );
};

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Dashboard);
