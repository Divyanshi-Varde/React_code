import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Card = (props) => {
  let review = props.review;
  return (
    <div className="card">
      <div className="card-image">
        <img src={review.image} alt="image1"></img>
        <div className="image-circle"></div>
      </div>
      <div className="card-name">
        <p>{review.name}</p>
      </div>

      <div className="card-caption">
        <p>{review.job}</p>
      </div>

      <div className="quote-left">
        <FaQuoteLeft />
      </div>
      <div className="card-para">{review.text}</div>
      <div className="quote-right">
        <FaQuoteRight />
      </div>
    </div>
  );
};

export default Card;
