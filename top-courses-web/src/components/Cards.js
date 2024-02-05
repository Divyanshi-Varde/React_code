import React from "react";
import Card from "./Card";

const Cards = ({ courses }) => {
  let allCourses = [];

  //returns you an array of all courses recieved from the api response

  const getCourses = () => {
    Object.values(courses).forEach((courseCategory) => {
      courseCategory.forEach((course) => {
        allCourses.puch(course);
      });
    });
    return allCourses;
  };
  return (
    <div>
      {getCourses().map((course) => {
        return <Card />;
      })}
    </div>
  );
};
export default Cards;
