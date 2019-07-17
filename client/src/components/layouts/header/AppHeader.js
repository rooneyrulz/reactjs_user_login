import React, { useState } from "react";
import {
  Container,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav
} from "reactstrap";

import NavLinks from "../navLinks/NavLinks";

const AppHeader = () => {
  const [state, setState] = useState({ isOpen: false });
  const { isOpen } = state;

  const toggle = () => setState({ ...state, isOpen: !state.isOpen });

  return (
    <Navbar id="Navbar" dark expand="md" color="danger">
      <Container>
        <NavbarBrand href="/home">AUTH PAGE</NavbarBrand>
        <NavbarToggler onClick={() => toggle()}></NavbarToggler>
        <Collapse navbar isOpen={isOpen}>
          <Nav navbar className="ml-auto">
            <NavLinks />
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};

export default AppHeader;
