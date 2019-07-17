import React from "react";
import { Link } from "react-router-dom";

import SignupForm from "../../common/forms/SignupForm";

const Signup = ({ history }) => {
  return (
    <div id="Signup">
      <h1 className="p-heading text-center display-4 mb-5">Sign Up</h1>
      <SignupForm history={ history } />
      <br />
      <p className="lead text-center">
        If you already have an account, Let's <Link to="/sign-in">Sign In</Link>
      </p>
    </div>
  );
};

export default Signup;
