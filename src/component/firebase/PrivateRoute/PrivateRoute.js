import React from "react";
import { Spinner } from "react-bootstrap";
import { Navigate, useLocation } from "react-router";
import useAuth from "../../hook/useAuth";
const PrivateRoute = ({ children, ...rest }) => {
  let { user, isLoading } = useAuth();
  let location = useLocation();
  if (isLoading) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }
  if (user.email) {
    return children;
  }
  return <Navigate to="/Login" state={{ from: location }} />;
};

export default PrivateRoute;
