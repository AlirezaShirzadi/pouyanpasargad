import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useTranslation } from "react-i18next";

import smallLogo from "./../img/SmallLogo.png";

export default function MyNav() {
  const { t, i18n } = useTranslation();

  const changeLNG = (e) => {
    i18n.changeLanguage(e.target.id);
  };

  return (
    <Navbar expand="lg" className="my-personal-navbar">
      <Navbar.Brand>
        <img src={smallLogo} className="navbar-brand" alt="navbar-brand" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <div className="my-nav-item">
            <NavLink href="#home" to="/" className="nav-link">
              {t("home")}
            </NavLink>
          </div>
          <div className="my-nav-item">
            <HashLink smooth to="/#services" className="nav-link">
              {t("services")}
            </HashLink>
          </div>
          <NavDropdown
            title={t("products")}
            className="my-nav-item nav-link"
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item className="my-nav-item">
              <NavLink to="/carpet" className="nav-link">
                {t("carpet")}
              </NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item className="my-nav-item">
              <NavLink to="/handy-craft" className="nav-link">
                {t("handy-crafts")}
              </NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item className="my-nav-item">
              <NavLink to="/nuts" className="nav-link">
                {t("dried-fruit")}
              </NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item className="my-nav-item">
              <NavLink to="/herbal" className="nav-link">
                {t("herbal-essensse")}
              </NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item className="my-nav-item">
              <NavLink to="/instruction" className="nav-link">
                {t("instruction")}
              </NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item className="my-nav-item">
              <NavLink to="/mineral" className="nav-link">
                {t("mineral")}
              </NavLink>
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown
            title={t("language")}
            className="my-nav-item nav-link"
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item
              onClick={changeLNG}
              className="my-nav-item nav-link"
              id="fa"
            >
              Persian
            </NavDropdown.Item>
            <NavDropdown.Item
              onClick={changeLNG}
              className="my-nav-item nav-link"
              id="en"
            >
              English
            </NavDropdown.Item>
            <NavDropdown.Item
              onClick={changeLNG}
              className="my-nav-item nav-link"
              id="ar"
            >
              Arabic
            </NavDropdown.Item>
            <NavDropdown.Item
              onClick={changeLNG}
              className="my-nav-item nav-link"
              id="es"
            >
              Espanol
            </NavDropdown.Item>
            <NavDropdown.Item
              onClick={changeLNG}
              className="my-nav-item nav-link"
              id="ru"
            >
              Russian
            </NavDropdown.Item>
          </NavDropdown>
          <div className="my-nav-item">
            <HashLink smooth to="/#footer" className="nav-link">
              {t("contact")}
            </HashLink>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
