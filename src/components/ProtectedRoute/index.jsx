import  useAuth  from "../../hooks/useAuth";
import { PATH_LOGIN } from "../../routes/paths";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = () => {
  const auth = useAuth();

  // if (!auth) return <Navigate to={{ pathname: PATH_LOGIN }} />;

  return <Outlet />;
};
