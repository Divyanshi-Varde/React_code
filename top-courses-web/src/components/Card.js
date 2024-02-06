import React from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

const Card = (props) => {
  let course = props.course;
  let likedCourses = props.likedCourses;
  let setLikedCourses = props.setLikedCourses;

  function clickHandler() {
    if (likedCourses.includes(course.id)) {
      setLikedCourses((prev) => prev.filter((cid) => cid !== course.id));
      toast.warning("Like removed!");
    } else {
      if (likedCourses.length === 0) {
        setLikedCourses([course.id]);
      } else {
        setLikedCourses((prev) => [...prev, course.id]);
      }
      toast.warning("Liked Successfully!");
    }
  }

  return (
    <div className="card">
      <div className="image">
        <img src={course.image.url} alt="image1"></img>
        <div className="like-btn">
          <button onClick={clickHandler}>
            {!likedCourses.includes(course.id) ? (
              <FcLikePlaceholder fontSize="1.25rem" />
            ) : (
              <FcLike fontSize="1.25rem" />
            )}
          </button>
        </div>
      </div>
      <div>
        <p className="title">{course.title}</p>
        <p className="para">
          {course.description.length > 100
            ? course.description.substr(0, 100) + "..."
            : course.description}
        </p>
      </div>
    </div>
  );
};

export default Card;
