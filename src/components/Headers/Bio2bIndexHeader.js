/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
// core components

import '../../assets/css/mhr.css'

function Bio2bIndexHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
            "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
      <>
        <div className="page-header clear-filter" mhr="mhr">
          <div
              className="page-header-image"
              style={{
                backgroundImage: "url(" + require("assets/img/prdbg/bio2b.jpg") + ")"
              }}
              ref={pageHeader}
          ></div>
          <Container>
            <div className="content-center brand">
             {/* <img
                  alt="..."
                  className="n-logo"
                  src={require("assets/img/now-logo.png")}
              ></img>*/}
              <h1 className="h1-seo">生化危机2 BDSM篇</h1>
              <h3>敬请期待</h3>
            </div>
            {/*<h6 className="category category-absolute">
            Designed by{" "}
            <a href="http://invisionapp.com/?ref=creativetim" target="_blank">
              <img
                alt="..."
                className="invision-logo"
                src={require("assets/img/invision-white-slim.png")}
              ></img>
            </a>
            . Coded by{" "}
            <a
              href="https://www.creative-tim.com?ref=nukr-index-header"
              target="_blank"
            >
              <img
                alt="..."
                className="creative-tim-logo"
                src={require("assets/img/creative-tim-white-slim2.png")}
              ></img>
            </a>
            .
          </h6>*/}
          </Container>
        </div>
      </>
  );
}

export default Bio2bIndexHeader;
