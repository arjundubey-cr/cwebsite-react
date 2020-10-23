import React from "react";
import Carousel from "react-bootstrap/Carousel";
import img1 from "../assets/images/faculty-back1.jpg";
import img2 from "../assets/images/faculty-front1.jpg";
import img3 from "../assets/images/faculty-img3.jpg";
const Carasouel = () => {
  const data = [
    {
      image: img1,
      title: "First slide label",
      text: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
      image: img2,
      title: "Second slide label",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      image: img3,
      title: "Third slide label",
      text: "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
    },
  ];
  // const prevIcon = <span aria-hidden='true' className='fa d-xl fa-arrow-left' />
  return (
    <Carousel>
      {data.map((data, index) => (
 <Carousel.Item interval={1000} key ={index}>
          <img
            className="d-block w-100"
            src={data.image}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>{data.title}</h3>
            <p>{data.t}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Carasouel;
