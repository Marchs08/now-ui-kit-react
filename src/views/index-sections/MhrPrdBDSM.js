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
      <div className="section section-tabs"
           /*data-background-color="black"*/>
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" md="10" xl="6">
              <p className="category">SexyRop Design</p>
             <img
                  alt="..."
                  className="rounded-circle img-raised"
                  src={require("assets/img/mhr/rop0.png")}

              ></img>
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



      <div className="section {/*section-download*/}"
          /*data-background-color="black"*/>
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" md="10" xl="6">
              <p className="category">SexyBow Design</p>
              <img
                  alt="..."
                  className="rounded-circle img-raised"
                  src={require("assets/img/mhr/bow0.png")}

              ></img>
            </Col>
            <Col className="ml-auto mr-auto" md="10" xl="6">
              <p className="category">SexyBow GamePreview</p>
              <img
                  alt="..."
                  className="rounded-circle img-raised"
                  src={require("assets/img/mhr/bow1.jpg")}
              ></img>
            </Col>
          </Row>
        </Container>
      </div>


      <div className="section section-tabs">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" md="10" xl="6">
              <p className="category">SexyTea Design</p>
              <img
                  alt="..."
                  className="rounded-circle img-raised"
                  src={require("assets/img/mhr/tea0.png")}

              ></img>
            </Col>
            <Col className="ml-auto mr-auto" md="10" xl="6">
              <p className="category">SexyTea GamePreview</p>
              <img
                  alt="..."
                  className="rounded-circle img-raised"
                  src={require("assets/img/mhr/tea1.jpg")}

              ></img>
            </Col>
          </Row>
        </Container>
      </div>

    </>
  );
}

export default MhrPrdBDSM;
