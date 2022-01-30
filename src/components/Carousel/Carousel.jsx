import React from "react";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
  MDBContainer,
} from "mdb-react-ui-kit";
import classes from "./Carousel.module.css";

const Carousel = () => {
  return (
    <MDBContainer className={`${classes.carousel_container}`}>
      <MDBCarousel showControls light className="rounded mt-4">
        <MDBCarouselInner>
          <MDBCarouselItem className="active">
            <MDBContainer fluid className={classes.video_container}>
              <img
                src="https://i.ibb.co/pZKFnQ6/Copy-of-Burger-Promo-Ad-Made-with-Poster-My-Wall.jpg"
                alt="burger2"
                className={`${classes.carousel_img} square border img-fluid border-4 `}
              />
            </MDBContainer>
          </MDBCarouselItem>
          <MDBCarouselItem>
            <img
              src="https://i.ibb.co/26KNLQs/4037176.jpg"
              alt="burger2"
              className={`${classes.carousel_img} square border img-fluid border-4 `}
            />
          </MDBCarouselItem>
          <MDBCarouselItem>
            <img
              src="https://i.ibb.co/94qQWzf/Copy-of-Super-Delicious-Breakfast-Twitter-Made-with-Poster-My-Wall.jpg"
              alt="burger3"
              className={`${classes.carousel_img} square border img-fluid border-4 `}
            />
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
};

export default Carousel;
