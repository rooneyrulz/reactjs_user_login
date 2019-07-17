import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Home = ({ isAuthenticated, history }) => {
  if (isAuthenticated) history.push("/dashboard");
  return (
    <div id="Home">
      <h1 className="display-4">Home</h1>
    </div>
  );
};

Home.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Home);
