import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Row, Col, Form, FormGroup, Label, Input, Button } from "reactstrap";

import { registerUser } from "../../../actions/authAction";

const SignupForm = ({ auth: { isAuthenticated }, registerUser, history }) => {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    cPassword: ""
  });

  const { name, username, email, password, cPassword } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();

    const payload = {
      name,
      username,
      email,
      password,
      cPassword
    };
    registerUser(payload);
  };

  if (isAuthenticated) history.push("/dashboard");

  return (
    <Form onSubmit={e => onSubmit(e)}>
      <Row>
        <Col sm="12">
          <FormGroup>
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              id="name"
              name="name"
              className="form-control form-control-lg"
              placeholder="Enter Name"
              onChange={e => onChange(e)}
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col sm="12" md="6">
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
        <Col sm="12" md="6">
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              className="form-control form-control-lg"
              placeholder="Enter Email"
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
      <Row>
        <Col sm="12">
          <FormGroup>
            <Label htmlFor="cPassword">Confirm Password</Label>
            <Input
              type="password"
              id="cPassword"
              name="cPassword"
              className="form-control form-control-lg"
              placeholder="Confirm Password"
              onChange={e => onChange(e)}
            />
          </FormGroup>
        </Col>
      </Row>
      <Button id="btn-signup" type="submit" color="success" className="btn-lg">
        Sign Up
      </Button>
    </Form>
  );
};

SignupForm.propTypes = {
  auth: PropTypes.object.isRequired,
  registerUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { registerUser }
)(SignupForm);
