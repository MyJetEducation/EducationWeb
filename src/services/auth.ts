import React from "react";
import {AuthContext} from "./AuthProvider";

export function useAuth() {
  return React.useContext(AuthContext);
}