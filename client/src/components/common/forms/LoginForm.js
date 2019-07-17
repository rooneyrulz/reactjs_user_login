import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Row, Col, Form, FormGroup, Label, Input, Button } from "reactstrap";

import { loginUser } from "../../../actions/authAction";

const LoginForm = ({ auth: { isAuthenticated }, loginUser, history }) => {
  const [formData, setFormData] = useState({ username: "", password: "" });

  const { username, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    loginUser(username, password);
  };

  if (isAuthenticated) history.push("/dashboard");

  return (
    <Form onSubmit={e => onSubmit(e)}>
      <Row>
        <Col sm="12">
          <FormGroup>
            <Label htmlFor="username">Username</Label>
            <Input
              type="text"
              id="username"
              name="username"
              className="form-control form-control-lg"
              placeholder="Enter Username"
              onChange={e => onChange(e)}
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col sm="12">
          <FormGroup>
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              name="password"
              className="form-control form-control-lg"
              placeholder="Enter Password"
              onChange={e => onChange(e)}
            />
          </FormGroup>
        </Col>
      </Row>
      <Button id="btn-login" type="submit" color="primary" className="btn-lg">
        Sign In
      </Button>
    </Form>
  );
};

LoginForm.propTypes = {
  auth: PropTypes.object.isRequired,
  loginUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { loginUser }
)(LoginForm);
