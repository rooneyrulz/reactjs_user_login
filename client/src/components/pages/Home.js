import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Jumbotron } from "reactstrap";

const Home = ({ isAuthenticated, history }) => {
  if (isAuthenticated) history.push("/dashboard");
  return (
    <div id="Home">
      <Jumbotron>
        <h1 className="home-heading display-3 mt-5 text-light">Auth Page</h1>
      </Jumbotron>
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
