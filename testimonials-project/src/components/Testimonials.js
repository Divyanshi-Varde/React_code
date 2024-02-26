import React from "react";
import Card from "./Card";
import { useState } from "react";

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Testimonials = (props) => {
  let reviews = props.reviews;
  
  let [index, setIndex] = useState(0);
  function leftShiftHandler() {
    if (index - 1 === 0) {
      setIndex(reviews.length - 1);
    } else {
      setIndex(index - 1);
    }
  }
  function rightShiftHandler() {
    if (index + 1 >= reviews.length) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }
  function surpriseHandler() {
    let random = Math.floor(Math.random() * reviews.length);
    setIndex(random);
  }
  return (
    <div className="testimonial">
      <Card review={reviews[index]}></Card>

      <div className="buttons">
        <button onClick={leftShiftHandler} className="left-arrow-button">
          <FiChevronLeft />
        </button>
        <button onClick={rightShiftHandler} className="right-arrow-button">
          <FiChevronRight />
        </button>
      </div>

      <div>
        <button onClick={surpriseHandler} className="card-button">
          Surprise Me
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
