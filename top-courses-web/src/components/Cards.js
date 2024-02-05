import React from "react";
import Card from "./Card";
const Cards = (props) => {
  let courses = props.courses;
  // console.log("printing data");
  // console.log(courses);
  function getCourses() {
    let allCourses = [];
    Object.values(courses).forEach((array) => {
      array.forEach((courseData) => {
        allCourses.push(courseData);
      });
    });
    return allCourses;
  }
  return (
    <div className="cards">
      {getCourses().map((course) => {
        return <Card key={course.id} course={course} />;
      })}
    </div>
  );
};
export default Cards;
// {!courses ? (
//   <div>
//       <p>No Data Found</p>
//   </div>
// ): (
//   getCourses().map((course) => {
//   return <Card key = {course.id} course = {course}/>
// })
// )}
