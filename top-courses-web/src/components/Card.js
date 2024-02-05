import React from "react";
import { FcLike } from "react-icons/fc";

const Card = (props) => {
  let course = props.course;
  return (
    <div className="card">
      <div className="image">
        <img src={course.image.url} alt="image1"></img>
        <div className="like-btn">
          <button>
            <FcLike fontSize="1.25rem" />
          </button>
        </div>
      </div>
      <div>
        <p className="title">{course.title}</p>
        <p className="para">{course.description}</p>
      </div>
    </div>
  );
};

export default Card;
