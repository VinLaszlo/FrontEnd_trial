import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Loader from "../components/Layout/Loader";

const OwnerProtectedRoute = ({ children }) => {
  const { isLoading, isOwner } = useSelector((state) => state.owner);
  if (isLoading === true) {
    return <Loader />;
  } else {
    if (!isOwner) {
      return <Navigate to={`/admin-login`} replace />;
    }
    return children;
  }
};

export default OwnerProtectedRoute;
