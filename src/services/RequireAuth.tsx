import React from "react";
import {useAuth} from "./auth";
import {useLocation, Navigate} from "react-router-dom";

export function RequireAuth({ children }: { children: JSX.Element }) {
  const auth = useAuth();
  const location = useLocation();

  if (!auth.user) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
}