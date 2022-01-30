import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBIcon,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import React from "react";
import { CartState } from "../../context/Context";
import classes from "./ProductHamburger.module.css";

const ProductHamburger = (props) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  const existHamburgerCart = cart.find((e) => e.id === props.id);

  const addToCartClickHandler = () => {
    !existHamburgerCart
      ? dispatch({ type: "ADD_TO_CART", payload: props })
      : props.setShowModal(true);
  };

  return (
    <MDBCol sm="6" className="col-example p-4">
      <MDBCard
        style={{ width: "auto" }}
        alignment="center"
        className="shadow bg-warning h-100"
        fluid
      >
        <MDBCardBody>
          <MDBCardTitle className="text-dark">{props.name}</MDBCardTitle>
          <img
            src={props.image}
            className={`${classes.burger_img} img-fluid`}
          ></img>
          <MDBCardText className="text-dark">Price: {props.price}€</MDBCardText>
          <MDBBtn onClick={addToCartClickHandler} className="btn-dark">
            <MDBIcon fas icon="plus" className="pe-1" />
            Add to cart
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
};

export default ProductHamburger;
