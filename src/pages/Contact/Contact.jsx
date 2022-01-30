import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import React from "react";
import classes from "./Contact.module.css";

const Contact = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol size="md" className="col text-dark pt-2">
          <h1>Get in touch</h1>

          <p>
            Phone:0255588954 <br></br>
            Adress:Michingan,St<br></br>
            Email:hamburger_store@hmbstore.com
          </p>
        </MDBCol>
        <MDBCol size="md" className="col pb-3">
          <img
            src={"https://i.ibb.co/VSjRFN5/map.png"}
            alt={"about"}
            className="rounded shadow"
          />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Contact;
