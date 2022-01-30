import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBIcon,
  MDBCol,
} from "mdb-react-ui-kit";
import React from "react";
import { CartState } from "../../context/Context";
import classes from "./ProductDrink.module.css";

const ProductDrink = (props) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  const existDrinkCart = cart.find((e) => e.id === props.id);

  const addToCartClickHandler = () => {
    !existDrinkCart
      ? dispatch({ type: "ADD_TO_CART", payload: props })
      : props.setShowModal(true);
  };

  return (
    <MDBCol sm="6" className="col p-4">
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
            className={`${classes.drink_img} img-fluid`}
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

export default ProductDrink;
