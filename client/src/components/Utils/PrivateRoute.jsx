import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRoute() {
  const auth = useSelector(state => state.auth);

  if (!auth.isAuthenticated) {
    return <Navigate to="/auth" replace />;
  }

  return <Outlet />;
}

export default PrivateRoute;
