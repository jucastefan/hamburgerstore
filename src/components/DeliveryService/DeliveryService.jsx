import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import React from "react";
import classes from "./DeliveryService.module.css";

const DeliveryService = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol size="md" className="col">
          <p className="display-3 text-dark">
            Service delivery available 24/7!
          </p>
          <img
            src={
              "https://i.ibb.co/8KMfrRg/undraw-On-the-way-re-swjt-3-removebg-preview-1.png"
            }
            alt="delivery1"
            className={`${classes.delivery_img1} img-fluid`}
          ></img>
        </MDBCol>
        <MDBCol size="md" className="col">
          <img
            src={"https://i.ibb.co/thDCxvW/pngegg-2.png"}
            alt="delivery2"
            className={`${classes.delivery_img2} img-fluid`}
          ></img>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default DeliveryService;
