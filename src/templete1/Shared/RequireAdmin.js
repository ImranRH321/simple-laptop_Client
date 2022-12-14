import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import auth from "../../hooks/useFirebase";
import Loading from "./Loading";

const RequireAdmin = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const [isAdmin, isLoading] = useAdmin(user);
  const location = useLocation();

  if (loading || isLoading) {
    return <Loading></Loading>;
  }
  if (!user || !isAdmin) {
    signOut(auth);
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAdmin;
