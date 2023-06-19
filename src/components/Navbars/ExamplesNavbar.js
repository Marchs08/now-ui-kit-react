import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
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

function ExamplesNavbar() {
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
      <Navbar className={"fixed-top " + navbarColor} color="neutral" expand="lg">
        <Container>
          <UncontrolledDropdown className="button-dropdown">
            <DropdownToggle
              caret
              data-toggle="dropdown"
              href="#pablo"
              id="navbarDropdown"
              tag="a"
              onClick={(e) => e.preventDefault()}
            >
              <span className="button-bar"></span>
              <span className="button-bar"></span>
              <span className="button-bar"></span>
            </DropdownToggle>
            <DropdownMenu aria-labelledby="navbarDropdown">
              <DropdownItem to="/mhrl" tag={Link}>
                怪物猎人崛起
              </DropdownItem>
              <DropdownItem divider></DropdownItem>
              <DropdownItem  tag="a">
                <font style={{color:'grey'}}>上古卷轴5</font>
              </DropdownItem>
              <DropdownItem  tag="a">
                <font style={{color:'grey'}}>辐射4</font>
              </DropdownItem>
              <DropdownItem href="" onClick={(e) => e.preventDefault()}>
                <font style={{color:'grey'}}>怪物猎人世界</font>
              </DropdownItem>
              <DropdownItem href="" onClick={(e) => e.preventDefault()}>
                <font style={{color:'grey'}}>生化危机</font>
              </DropdownItem>
              <DropdownItem href="" onClick={(e) => e.preventDefault()}>
                <font style={{color:'grey'}}>最终幻想</font>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <div className="navbar-translate">
            <NavbarBrand
             /* href="https://demos.creative-tim.com/now-ui-kit-react/index?ref=nukr-examples-navbar"
              target="_blank"*/
              id="navbar-brand"
            >
              衣柜列表
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
              {/*<NavItem>
                <NavLink to="/main" tag={Link}>
                  首页
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/profile-page" tag={Link}>
                  关于
                </NavLink>
              </NavItem>*/}
              <NavItem>
                <NavLink
                  href="http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=FwzN_5PsbnDzFAfFLohStaKLjX4V75_O&authKey=Uf3LD%2B%2BwtkRY1uVzlL0dRWUhVetVFWFrC9RB9Nque2FrNU0jqHX0FPjoVzu9motK&noverify=0&group_code=670866356"
                  target="_blank"
                  id="twitter-tooltip"
                >
                  <i className="fab fa-qq"></i>
                  <p className="d-lg-none d-xl-none">Twitter</p>
                </NavLink>
                <UncontrolledTooltip target="#twitter-tooltip">
                  问题与建议
                </UncontrolledTooltip>
              </NavItem>



              <NavItem> {/*Font Awesome 4*/}
                <NavLink
                  href=""
                  target="_blank"
                  id="facebook-tooltip"
                >
                  <i className="fab fa-weixin"></i>
                  <p className="d-lg-none d-xl-none">Facebook</p>
                </NavLink>
                <UncontrolledTooltip target="#facebook-tooltip">
                  R18专业定制
                </UncontrolledTooltip>
              </NavItem>


              <NavItem>
                <NavLink
                    href=""
                    target="_blank"
                    id="mail-tooltip"
                >
                  <i className="fab fa fa-envelope"></i>
                  <p className="d-lg-none d-xl-none">Instagram</p>
                </NavLink>
                <UncontrolledTooltip target="#mail-tooltip">
                  联系我
                </UncontrolledTooltip>
              </NavItem>


              <NavItem>
                <NavLink
                  href=""
                  target="_blank"
                  id="credit-tooltip"
                >
                  <i className="fab fa fa-credit-card"></i>
                  <p className="d-lg-none d-xl-none">Instagram</p>
                </NavLink>
                <UncontrolledTooltip target="#credit-tooltip">
                  赞助
                </UncontrolledTooltip>
              </NavItem>


            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default ExamplesNavbar;
