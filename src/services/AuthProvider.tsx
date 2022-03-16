import React from "react";
import {User} from "../domain/user";
import {useDispatch} from "react-redux";
import {resetUser} from "../store/userSlicer";

interface AuthContextType {
  user: User;
  signIn: (user: string, callback: VoidFunction) => void;
  signOut: (callback: VoidFunction) => void;
  signInRefresh: any
}

export const AuthContext = React.createContext<AuthContextType>(null!);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const dispatch = useDispatch();
  const [user, setUser] = React.useState<any>(() => localStorage.getItem("token"));

  const signIn = (newUser: Token, callback?: VoidFunction) => {
    localStorage.setItem("token", newUser);
    setUser(newUser);
    callback && callback();
  };
  const signInRefresh = (newUser: RefreshToken) => {
    localStorage.setItem("refreshToken", newUser);
  };

  const signOut = (callback: VoidFunction) => {
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    setUser(null);
    dispatch(resetUser())
    callback();
  };

  let value = { user, signIn, signInRefresh, signOut};

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}