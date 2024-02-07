import React from "react";
import { Outlet } from "react-router-dom";

const MainHeader = (props) => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default MainHeader;
