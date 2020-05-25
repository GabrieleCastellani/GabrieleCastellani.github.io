/*!

=========================================================
* Paper Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react"
import {
  FaGithub,
  FaInstagram,
  FaFacebookSquare,
  FaTwitter,
} from "react-icons/fa"
// nodejs library that concatenates strings
import classnames from "classnames"
// reactstrap components
import {
  Button,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from "reactstrap"

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent")
  const [navbarCollapse, setNavbarCollapse] = React.useState(false)

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse)
    document.documentElement.classList.toggle("nav-open")
  }

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("")
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("navbar-transparent")
      }
    }

    window.addEventListener("scroll", updateNavbarColor)

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor)
    }
  })
  return (
    <Navbar className={classnames("fixed-top", navbarColor)} expand="lg">
      <Container>
        <div className="navbar-translate">
          <NavbarBrand data-placement="bottom" href="/">
            Home
          </NavbarBrand>
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse,
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://twitter.com/gabrielec?ref=blog"
                target="_blank"
                title="Follow me on Twitter"
              >
                <FaTwitter />
                <p className="d-lg-none">Twitter</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://www.facebook.com/gabriele.castellani"
                target="_blank"
                title="Like me on Facebook"
              >
                <FaFacebookSquare />
                <p className="d-lg-none">Facebook</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://www.instagram.com/gab_404"
                target="_blank"
                title="Follow me on Instagram"
              >
                <FaInstagram />

                <p className="d-lg-none">Instagram</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://www.github.com/gabrielecastellani"
                target="_blank"
                title="Follow me on GitHub"
              >
                <FaGithub />
                <p className="d-lg-none">GitHub</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/bio">
                <i className="nc-icon nc-notes" /> About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/archive">
                <i className="nc-icon nc-notes" /> Archive
              </NavLink>
            </NavItem>
            {/* <NavItem>
              <Button
                className="btn-round"
                color="danger"
                href="#pablo"
                target="_blank"
                disabled
              >
                Upgrade to Pro
              </Button> 
            </NavItem>*/}
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  )
}

export default IndexNavbar
