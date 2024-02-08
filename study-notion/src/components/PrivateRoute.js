import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ isLoggedIn, children }) => {
    // const navigate = useNavigate();

  if (isLoggedIn) {
    console.log("in the private");
    return children;
  } else {
    console.log("bacha nai milega");
    return <Navigate to="/login"></Navigate>;

    // return navigate("/login")
  }
};

export default PrivateRoute;
