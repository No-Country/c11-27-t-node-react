import { Navigate, Outlet } from "react-router-dom";

function PrivateRoute() {
  const authToken = localStorage.getItem("authToken");

  if (!authToken) {
    return <Navigate to="/auth" replace />;
  }

  return <Outlet />;
}

export default PrivateRoute;
