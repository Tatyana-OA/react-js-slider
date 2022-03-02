import React, { useState } from "react";
import "./Slider.css";
import BtnSlider from "./BtnSlider";
import dataSlider from "./dataSlider";
let processEnv = process.env.PUBLIC_URL;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(1);
  console.log(processEnv);

  const nextSlide = () => {
    //change slide indexes (images) by one until the last index of the data array is reached
    if (slideIndex !== dataSlider.length) {
      setSlideIndex(slideIndex + 1);
    }
    //should the last index of data array be reached - loop
    else if (slideIndex === dataSlider.length) {
      setSlideIndex(1);
    }
  };
  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    }
    //when first is reached loop starting with the last
    else if (slideIndex === 1) {
      setSlideIndex(dataSlider.length);
    }
  };
  //setting the slide Index to the index that the dot is located at + 1
  const moveDot = (index) => {
    setSlideIndex(index);
  };
  return (
    <div className="container-slider">
      {dataSlider.map((obj, index) => {
        return (
          <div
            className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
            key={obj.id}
          >
            <img src={obj.img} />
          </div>
        );
      })}
      <BtnSlider moveSlide={nextSlide} direction={"next"} />
      <BtnSlider moveSlide={prevSlide} direction={"prev"} />
      {/* 
Dots portion uses the length of the data array so as many dots as there are photos can appear*/}
      <div className="container-dots">
        {Array.from({ length: dataSlider.length }).map((item, index) => (
          <div
            //   trigger is anonymous function so the moveDot f-n can be triggered with an argument
            onClick={() => moveDot(index + 1)}
            className={slideIndex === index + 1 ? "dot active" : "dot"}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
