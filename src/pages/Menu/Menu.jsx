import { MDBContainer, MDBRow } from "mdb-react-ui-kit";
import React, { Fragment, useState } from "react";
import ModalCart from "../../components/ModalCart";
import ProductHamburger from "../../components/ProductHamburger";
import { CartState } from "../../context/Context";
import classes from "./Menu.module.css";

const Menu = () => {
  const {
    state: { hamburgers },
  } = CartState();
  const [showModal, setShowModal] = useState(false);

  const hamburgersList = hamburgers.map((hamburger) => {
    return (
      <ProductHamburger
        key={hamburger.id}
        id={hamburger.id}
        name={hamburger.name}
        image={hamburger.image}
        price={hamburger.price}
        setShowModal={setShowModal}
      />
    );
  });

  return (
    <Fragment>
      <ModalCart showModal={showModal} setShowModal={setShowModal} />
      <MDBContainer fluid className={classes.fade_in}>
        <MDBContainer className="p-2">
          <MDBRow>{hamburgersList}</MDBRow>
        </MDBContainer>
      </MDBContainer>
    </Fragment>
  );
};

export default Menu;
