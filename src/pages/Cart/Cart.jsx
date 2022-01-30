import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBListGroup,
  MDBListGroupItem,
  MDBRow,
} from "mdb-react-ui-kit";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ProductCart from "../../components/ProductCart";
import { CartState } from "../../context/Context";
import classes from "./Cart.module.css";

const Cart = () => {
  const [total, setTotal] = useState(0);
  const {
    state: { cart },
  } = CartState();

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);

  const cartList = cart.map((item) => {
    return (
      <ProductCart
        key={item.id}
        id={item.id}
        name={item.name}
        image={item.image}
        price={item.price}
        qty={item.qty}
      />
    );
  });

  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol sm="12" md="12" sm="12" className="col py-3">
          <MDBListGroup className={`${classes} py-2`}>
            <MDBListGroupItem>
              <MDBCard
                style={{ width: "auto" }}
                alignment="center"
                className="shadow bg-warning"
                fluid
              >
                <MDBCardBody>
                  {cart.length < 1 && (
                    <p className="fs-1 text-white rounded shadow bg-dark">
                      Cart is Empty😨
                    </p>
                  )}
                  <MDBRow>{cartList}</MDBRow>
                </MDBCardBody>
              </MDBCard>
            </MDBListGroupItem>
          </MDBListGroup>
        </MDBCol>
        <MDBCol sm="12" className="col py-4">
          <MDBListGroup
            className={`${classes} py-2`}
            style={{ minWidth: "20rem" }}
          >
            <MDBListGroupItem className="fs-1 border-0">
              {`Total (${cart.length} products):`}
              <br></br>
              {total}€
            </MDBListGroupItem>
            <MDBListGroupItem className="border-0">
              <MDBBtn className="mx-2" color="dark">
                Order
              </MDBBtn>
            </MDBListGroupItem>
          </MDBListGroup>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Cart;
