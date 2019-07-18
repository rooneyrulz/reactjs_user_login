import React from "react";
import { Container } from "reactstrap";

const AppFooter = () => {
  return (
    <div id="Footer" className="text-center">
      <Container>
        <hr />
        <p className="lead text-muted py-4">
          <strong className="text-primary">Auth Page</strong> &copy; by
          rulz@programmer.com 2k19
        </p>
      </Container>
    </div>
  );
};

export default AppFooter;
