import React, { useState } from "react";
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBBadge,
} from "mdb-react-ui-kit";
import logo from "../../images/logo.png";
import classes from "./Header.module.css";
import { CartState } from "../../context/Context";

const Header = () => {
  const [showNavCentred, setShowNavCentred] = useState(false);

  const {
    state: { cart },
  } = CartState();

  return (
    <MDBNavbar expand="lg" light bgColor="white" className={classes.navbar}>
      <MDBContainer fluid className="fs-5">
        <MDBNavbarBrand href="/">
          <img src={logo} width="120" alt="" loading="lazy" />
        </MDBNavbarBrand>
        <MDBNavbarLink href="/cart" className="d-lg-none d-md-block ms-auto">
          <MDBBadge pill color="danger">
            {cart.length}
          </MDBBadge>
          <span>
            <MDBIcon fas color="dark" icon="shopping-cart"></MDBIcon>
          </span>
        </MDBNavbarLink>
        <MDBNavbarToggler
          type="button"
          data-target="#navbarCenteredExample"
          aria-controls="navbarCenteredExample"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowNavCentred(!showNavCentred)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>
        <MDBCollapse
          navbar
          show={showNavCentred}
          center
          id="navbarCenteredExample"
        >
          <MDBNavbarNav fullWidth={false} className="ms-lg-5">
            <MDBNavbarItem>
              <MDBNavbarLink
                aria-current="page"
                href="/home"
                className={`${classes.hvr_underline_from_left} me-lg-5 text-dark`}
              >
                <MDBIcon fas icon="home" /> Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink
                href="/menu"
                className={`${classes.hvr_underline_from_left} me-lg-5 text-dark`}
              >
                <MDBIcon fas icon="utensils" /> Menu
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink
                href="/drinks"
                className={`${classes.hvr_underline_from_left} me-lg-5 text-dark`}
              >
                <MDBIcon fas icon="glass-cheers" /> Drinks
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink
                href="/about"
                className={`${classes.hvr_underline_from_left} me-lg-5 text-dark`}
              >
                <MDBIcon fas icon="book-open" /> About
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink
                href="/contact"
                className={`${classes.hvr_underline_from_left} me-lg-5 text-dark`}
              >
                <MDBIcon fas icon="phone-volume" /> Contact
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
        <MDBNavbarLink href="/cart" className="d-none d-lg-block">
          <span>
            <MDBBadge pill color="danger">
              {cart.length}
            </MDBBadge>
            <MDBIcon fas color="dark" icon="shopping-cart"></MDBIcon>
          </span>
        </MDBNavbarLink>
      </MDBContainer>
    </MDBNavbar>
  );
};

export default Header;
