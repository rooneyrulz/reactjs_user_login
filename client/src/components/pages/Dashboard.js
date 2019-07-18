import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Jumbotron } from "reactstrap";

// SPINNER
import Spinner from "../common/spinner/Spinner";

const Dashboard = ({ auth: { isAuthenticated, loading, user }, history }) => {
  if (!isAuthenticated) history.push("/sign-in");
  return loading ? (
    <Spinner />
  ) : (
    <div id="Dashboard">
      <Jumbotron>
        <h1 className="display-4 text-primary">Dashboard</h1>
        <br />
        {user && <p className="lead"> Welcome {user.name}</p>}
      </Jumbotron>
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
