import React from "react";
import { Carousel } from "react-bootstrap";
import "./slice.scss";
import sliceHome1 from "../../../assets/images/sliceHome1.webp";
import sliceHome2 from "../../../assets/images/sliceHome2.webp";
import sliceHome3 from "../../../assets/images/sliceHome3.webp";
import laudai from "../../../assets/images/dau-tu-dinh-cu-anh-quoc-casa-seguro-0001.jpg";
const SliceHome = () => {
  return (
    <Carousel id="carouselExampleControls" className="sliceContainer">
      <Carousel.Item>
        <img className="d-block " src={laudai} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block " src={sliceHome2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block " src={sliceHome3} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
};

export default SliceHome;
