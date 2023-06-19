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

function MhrPrdBDSM() {
  const [iconPills, setIconPills] = React.useState("1");
  const [pills, setPills] = React.useState("1");
  return (
    <>
      <div className="section {/*section-download*/}"
           /*data-background-color="black"*/>
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" md="10" xl="6">
              <p className="category">SexyRop Design</p>
              <a href={"https://www.baidu.com"}> <img
                  alt="..."
                  className="rounded-circle img-raised"
                  src={require("assets/img/mhr/rop0.png")}

              ></img></a>
            </Col>
            <Col className="ml-auto mr-auto" md="10" xl="6">
              <p className="category">SexyRop GamePreview</p>
              <img
                  alt="..."
                  className="rounded-circle img-raised"
                  src={require("assets/img/mhr/rop1.jpg")}
              ></img>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="section section-tabs">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" md="10" xl="6">
              <p className="category">SexyRop Design</p>
              <a href={"https://www.baidu.com"}> <img
                  alt="..."
                  className="rounded-circle img-raised"
                  src={require("assets/img/mhr/rop0.png")}

              ></img></a>
            </Col>
            <Col className="ml-auto mr-auto" md="10" xl="6">
              <p className="category">SexyRop GamePreview</p>
              <a href={"https://www.baidu.com"}> <img
                  alt="..."
                  className="rounded-circle img-raised"
                  src={require("assets/img/mhr/rop1.jpg")}

              ></img></a>
            </Col>
          </Row>
        </Container>
      </div>

    </>
  );
}

export default MhrPrdBDSM;
