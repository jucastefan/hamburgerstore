import {
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBCol,
  MDBInput,
} from "mdb-react-ui-kit";
import React, { Fragment } from "react";
import { CartState } from "../../context/Context";
import classes from "./ProductCart.module.css";

const ProductCart = (props) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  const onChangeQuantity = (e) => {
    if (e.target.value > 1)
      dispatch({
        type: "CHANGE_CART_QTY",
        payload: { id: props.id, qty: e.target.value },
      });
  };

  const removeFromCartClickHandler = () => {
    dispatch({ type: "REMOVE_FROM_CART", payload: props });
  };

  return (
    <Fragment>
      <MDBCol lg="12" className="col my-3">
        <MDBRow>
          <MDBCol lg="3" className="col d-flex align-items-center">
            <MDBContainer>
              <MDBCardTitle className="text-dark fs-2">
                {props.name}
              </MDBCardTitle>
            </MDBContainer>
          </MDBCol>
          <MDBCol lg="3" className="col py-4">
            <MDBContainer>
              <img
                src={props.image}
                className={`${classes.product_cart_img}`}
              ></img>
            </MDBContainer>
          </MDBCol>
          <MDBCol lg="2" className="col d-flex align-items-center">
            <MDBContainer>
              <MDBInput
                onChange={onChangeQuantity}
                label="Qty (numbers)"
                id="qty"
                type="text"
                className=" form-white form-outline bg-white"
                dark
              />
            </MDBContainer>
          </MDBCol>
          <MDBCol lg="3" className="col d-flex align-items-center">
            <MDBContainer>
              <MDBCardText className="text-dark fs-2">
                Price: {props.price}€
              </MDBCardText>
            </MDBContainer>
          </MDBCol>
        </MDBRow>
      </MDBCol>
      <MDBCol
        lg="12"
        className="col d-flex align-items-center justify-content-center square border-bottom"
      >
        <MDBBtn onClick={removeFromCartClickHandler} className="btn-dark mb-2">
          <MDBIcon fas icon="trash-alt pe-1" />
          Remove from cart
        </MDBBtn>
      </MDBCol>
    </Fragment>
  );
};

export default ProductCart;
