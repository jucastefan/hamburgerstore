import { MDBContainer, MDBRow } from "mdb-react-ui-kit";
import React, { Fragment, useState } from "react";
import ModalCart from "../../components/ModalCart";
import ProductDrink from "../../components/ProductDrink";
import { CartState } from "../../context/Context";
import classes from "./Drinks.module.css";

const Drinks = () => {
  const {
    state: { drinks },
  } = CartState();

  const [showModal, setShowModal] = useState(false);

  const drinksList = drinks.map((drinks) => {
    return (
      <ProductDrink
        key={drinks.id}
        id={drinks.id}
        name={drinks.name}
        image={drinks.image}
        price={drinks.price}
        setShowModal={setShowModal}
      />
    );
  });

  return (
    <Fragment>
      <ModalCart showModal={showModal} setShowModal={setShowModal} />
      <MDBContainer fluid className={classes.fade_in}>
        <MDBContainer className="p-2">
          <MDBRow>{drinksList}</MDBRow>
        </MDBContainer>
      </MDBContainer>
    </Fragment>
  );
};

export default Drinks;
