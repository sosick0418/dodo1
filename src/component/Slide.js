import React from "react"
import { Carousel } from "react-bootstrap"
import FistImage from "../images/1.jpeg"
import SecondImage from "../images/2.jpeg"
import ThirdImage from "../images/3.jpeg"
import ForthImage from "../images/4.jpeg"

const Slide = () => {
  return (
    <section style={{ width: "100%", height: "100vh", position: "relative" }}>
      <div style={{ height: "100vh" }}>
        <Carousel style={{ height: "100%", overflow: "hidden" }}>
          <Carousel.Item>
            <img
              className="d-block w-100 h-100"
              src={FistImage}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={SecondImage}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img className="w-100" src={ThirdImage} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="w-100" src={ForthImage} alt="Third slide" />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
  )
}

export default Slide
