import React from "react";

const Filter = ({ filterData }) => {
  return (
    <div className="filter">
      {filterData.map((data) => {
        return <button key={data.id}>{data.title}</button>;
      })}
    </div>
  );
};

export default Filter;
