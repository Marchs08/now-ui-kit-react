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

function MhrPrdLace() {
  const [iconPills, setIconPills] = React.useState("1");
  const [pills, setPills] = React.useState("1");
  return (
    <>
      <div className="section section-download"
           /*data-background-color="black"*/>
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" md="10" xl="6">
              <p className="category">SexyAmore Design</p>
              <a href={"https://www.baidu.com"}> <img
                  alt="..."
                  className="rounded-circle img-raised"
                  src={require("assets/img/mhr/amore0.png")}

              ></img></a>
            </Col>
            <Col className="ml-auto mr-auto" md="10" xl="6">
              <p className="category">SexyAmore GamePreview</p>
              <img
                  alt="..."
                  className="rounded-circle img-raised"
                  src={require("assets/img/mhr/amore1.jpg")}
              ></img>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="section section-tabs">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" md="10" xl="6">
              <p className="category">SexyXin Design</p>
              <a href={"https://www.baidu.com"}> <img
                  alt="..."
                  className="rounded-circle img-raised"
                  src={require("assets/img/mhr/xing0.png")}

              ></img></a>
            </Col>
            <Col className="ml-auto mr-auto" md="10" xl="6">
              <p className="category">SexyXin GamePreview</p>
              <a href={"https://www.baidu.com"}> <img
                  alt="..."
                  className="rounded-circle img-raised"
                  src={require("assets/img/mhr/xing1.jpg")}

              ></img></a>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="section section-download"
          /* data-background-color="black"*/>
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" md="10" xl="6">
              <p className="category">SexyMay Design</p>
              <a href={"https://www.baidu.com"}> <img
                  alt="..."
                  className="rounded-circle img-raised"
                  src={require("assets/img/mhr/may0.png")}

              ></img></a>
            </Col>
            <Col className="ml-auto mr-auto" md="10" xl="6">
              <p className="category">SexyMay GamePreview</p>
              <img
                  alt="..."
                  className="rounded-circle img-raised"
                  src={require("assets/img/mhr/may1.jpg")}
              ></img>
            </Col>
          </Row>
        </Container>
      </div>



      <div className="section section-tabs">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" md="10" xl="6">
              <p className="category">SexyDoll Design</p>
              <a href={"https://www.baidu.com"}> <img
                  alt="..."
                  className="rounded-circle img-raised"
                  src={require("assets/img/mhr/doll0.png")}

              ></img></a>
            </Col>
            <Col className="ml-auto mr-auto" md="10" xl="6">
              <p className="category">SexyDoll GamePreview</p>
              <a href={"https://www.baidu.com"}> <img
                  alt="..."
                  className="rounded-circle img-raised"
                  src={require("assets/img/mhr/doll1.jpg")}

              ></img></a>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default MhrPrdLace;
