import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip,
} from "reactstrap";
import MhrPrdBDSM from "../../views/index-sections/MhrPrdBDSM";
import Mhrb from "../../views/mhr/Mhrb";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} expand="lg" color="dark" >
        <Container>
          <div className="navbar-translate">
            <NavbarBrand to="/main" tag={Link}  id="navbar-brand"
            >
              五月蕾丝
            </NavbarBrand>
            {/*<UncontrolledTooltip target="#navbar-brand">
              Designed by March08. Coded by March08
            </UncontrolledTooltip>*/}
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              <NavItem>
                <NavLink
                    /*href="#pablo"
                    onClick={(e) => {
                      e.preventDefault();
                      document
                          .getElementById("download-section")
                          .scrollIntoView();
                    }}*/
                >
                  <i className="now-ui-icons design_app mr-1"></i>
                  <p>上古卷轴</p>
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  /*href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("download-section")
                      .scrollIntoView();
                  }}*/
                >
                  <i className="now-ui-icons design_app mr-1"></i>
                  <p>辐射</p>
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  href="#pablo"
                  nav
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="now-ui-icons design_app mr-1"></i>
                  <p>怪物猎人-世界</p>
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem >
                    <i className="now-ui-icons clothes_tie-bow mr-1"></i>
                    蕾丝系列
                  </DropdownItem>
                  <DropdownItem  >
                    <i className="now-ui-icons design_vector mr-1"></i>
                    BDSM系列
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav>
                <DropdownToggle
                    caret
                    color="default"
                    href="#pablo"
                    nav
                    onClick={(e) => e.preventDefault()}
                >
                  <i className="now-ui-icons design_app mr-1"></i>
                  <p>怪物猎人-崛起</p>
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem to="/mhrl" tag={Link}>
                    <i className="now-ui-icons clothes_tie-bow mr-1"></i>
                    蕾丝系列
                  </DropdownItem>
                  <DropdownItem to="/mhrb" tag={Link}>
                    <i className="now-ui-icons design_vector mr-1"></i>
                    BDSM系列
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
             {/* <NavItem>
                <Button
                  className="nav-link btn-neutral"
                  color="info"
                  href="https://www.creative-tim.com/product/now-ui-kit-pro-react?ref=nukr-index-navbar"
                  id="upgrade-to-pro"
                  target="_blank"
                >
                  <i className="now-ui-icons arrows-1_share-66 mr-1"></i>
                  <p>Upgrade to PRO</p>
                </Button>
                <UncontrolledTooltip target="#upgrade-to-pro">
                  Cooming soon!
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://twitter.com/CreativeTim?ref=creativetim"
                  target="_blank"
                  id="twitter-tooltip"
                >
                  <i className="fab fa-twitter"></i>
                  <p className="d-lg-none d-xl-none">Twitter</p>
                </NavLink>
                <UncontrolledTooltip target="#twitter-tooltip">
                  Follow us on Twitter
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://www.facebook.com/CreativeTim?ref=creativetim"
                  target="_blank"
                  id="facebook-tooltip"
                >
                  <i className="fab fa-facebook-square"></i>
                  <p className="d-lg-none d-xl-none">Facebook</p>
                </NavLink>
                <UncontrolledTooltip target="#facebook-tooltip">
                  Like us on Facebook
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
                  target="_blank"
                  id="instagram-tooltip"
                >
                  <i className="fab fa-instagram"></i>
                  <p className="d-lg-none d-xl-none">Instagram</p>
                </NavLink>
                <UncontrolledTooltip target="#instagram-tooltip">
                  Follow us on Instagram
                </UncontrolledTooltip>
              </NavItem>*/}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default IndexNavbar;
