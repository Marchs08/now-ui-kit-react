import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components

function Project() {
  const [iconPills, setIconPills] = React.useState("1");
  const [pills, setPills] = React.useState("1");
  return (
    <>
      <div className="section section-tabs">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" md="10" xl="6">
              <p className="category">Tabs with Icons on Card</p>
              <a href={"https://www.baidu.com"}> <img
                  alt="..."
                  className="rounded-circle img-raised"
                  src={require("assets/img/cloth reference1.jpg")}

              ></img></a>
            </Col>
            <Col className="ml-auto mr-auto" md="10" xl="6">
              <p className="category">Tabs with Background on Card</p>
              <img
                  alt="..."
                  className="rounded-circle img-raised"
                  src={require("assets/img/cloth reference2.jpg")}
              ></img>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Project;
