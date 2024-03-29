import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { GrLinkPrevious } from "react-icons/gr";
import { GrLinkNext } from "react-icons/gr";
import CarouselImage from "./CarouselImage";

const CarouselActiveHandle = () => {
  const [index, setIndex] = useState(1);

  const handleClick = (selectedIndex) => {
    console.log(selectedIndex);
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={index}
      onSelect={(selectedIndex) => {
        handleClick(selectedIndex);
      }}
      // fade
      slide={false}
      data-bs-theme="white"
      prevIcon={<GrLinkPrevious size={50} color={"white"} />}
      nextIcon={<GrLinkNext size={50} color={"white"} />}
    >
      <Carousel.Item interval={1000}>
        <CarouselImage />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <CarouselImage />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <CarouselImage />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselActiveHandle;
