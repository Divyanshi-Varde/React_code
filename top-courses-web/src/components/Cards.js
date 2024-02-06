import React from "react";
import Card from "./Card";
import { useState } from "react";

const Cards = (props) => {
  let courses = props.courses;
  let category = props.category;

  const [likedCourses, setLikedCourses] = useState([]);
  function getCourses() {
    if (category === "All") {
      let allCourses = [];
      Object.values(courses).forEach((array) => {
        array.forEach((courseData) => {
          allCourses.push(courseData);
        });
      });
      return allCourses;
    } else {
      //only specific category array passed

      return courses[category];
      //return courses.filter((course) => course.category === category);
    }
  }
  return (
    <div className="cards">
      {getCourses()?.map((course) => {
        return (
          <Card
            key={course.id}
            course={course}
            likedCourses={likedCourses}
            setLikedCourses={setLikedCourses}
          />
        );
      })}
    </div>
  );
};
export default Cards;
