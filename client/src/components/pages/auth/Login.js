import React from "react";
import { Link } from "react-router-dom";

import LoginForm from "../../common/forms/LoginForm";

const Login = ({ history }) => {
  return (
    <div id="Login">
      <h1 className="p-heading text-center display-4 mb-5">Sign In</h1>
      <LoginForm history={ history } />
      <br />
      <p className="lead text-center">
        Do not already have an account? Let's <Link to="/sign-up">Sign Up</Link>
      </p>
    </div>
  );
};

export default Login;
