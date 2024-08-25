import React from "react";
import  useAuth  from "../../hooks/useAuth";
import { PATH_HOME } from "../../routes/paths";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoute = () => {
  const auth = useAuth();

  return auth ? <Navigate to={`${PATH_HOME}`} /> : <Outlet />;
};

export default PublicRoute;
