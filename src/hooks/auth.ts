import React from "react";
import {AuthContext} from "../context/AuthProvider";

export function useAuth() {
  return React.useContext(AuthContext);
}