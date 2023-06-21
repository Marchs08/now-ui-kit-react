import React from "react";

// reactstrap components
// import {
// } from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Bio2IndexHeader from "components/Headers/Bio2IndexHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";


// sections for this page
import Images from "views/index-sections/Images.js";
import BasicElements from "views/index-sections/BasicElements.js";
import Navbars from "views/index-sections/Navbars.js";
import Tabs from "views/index-sections/Tabs.js";
import Pagination from "views/index-sections/Pagination.js";
import Notifications from "views/index-sections/Notifications.js";
import Typography from "views/index-sections/Typography.js";
import Javascript from "views/index-sections/Javascript.js";
import Carousel from "views/index-sections/Carousel.js";
import NucleoIcons from "views/index-sections/NucleoIcons.js";
import CompleteExamples from "views/index-sections/CompleteExamples.js";
import SignUp from "views/index-sections/SignUp.js";
import Examples from "views/index-sections/Examples.js";
import Download from "views/index-sections/Download.js";
import Bio2PrdLace from "../index-sections/Bio2PrdLace";

function Bio2l() {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <Bio2IndexHeader />
        <div className="main">
          <Bio2PrdLace />
          {/*<Images />
          <BasicElements />
          <Navbars />
          <Tabs />
          <Pagination />
          <Notifications />
          <Typography />
          <Javascript />
          <Carousel />
          <NucleoIcons />
          <CompleteExamples />
          <SignUp />
          <Examples />
          <Download />*/}
        </div>
       {/* <DarkFooter />*/}
      </div>
    </>
  );
}

export default Bio2l;
