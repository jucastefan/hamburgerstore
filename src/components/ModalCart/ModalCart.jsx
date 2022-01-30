import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBContainer,
  MDBIcon,
} from "mdb-react-ui-kit";

import React, { useState } from "react";
import classes from "./ModalCart.module.css";

const ModalCart = (props) => {
  const toggleShow = () => props.setShowModal(!props.showModal);

  return (
    <MDBContainer>
      <MDBModal
        show={props.showModal}
        setShow={props.setShowModal}
        tabIndex="-2"
        c
      >
        <MDBModalDialog centered>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>
                <MDBIcon fas icon="exclamation-triangle" /> Warning
              </MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={toggleShow}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <span className="fs-4">
                <MDBIcon fas icon="exclamation-circle text-danger" /> Item was
                inserted! Please write the quantity in the cart.
              </span>
            </MDBModalBody>

            <MDBModalFooter>
              <MDBBtn color="dark" onClick={toggleShow}>
                Close
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </MDBContainer>
  );
};

export default ModalCart;
