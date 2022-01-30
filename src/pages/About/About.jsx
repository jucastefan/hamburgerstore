import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import React from "react";
import classes from "./About.module.css";

const About = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol size="md" className="col text-dark ">
          <MDBContainer className="p-5" />
          <h1>Who we are?</h1>

          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text. All the Lorem Ipsum generators on the Internet tend
            to repeat predefined chunks as necessary, making this the first true
            generator on the Internet.
          </p>
        </MDBCol>
        <MDBCol size="md" className="col">
          <img src={"https://i.ibb.co/FKFhVrh/pngegg-14.png"} alt={"about"} />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default About;
