import React from "react";

interface AuthContextType {
  user: any;
  signIn: (user: string, callback: VoidFunction) => void;
  signOut: (callback: VoidFunction) => void;
  signInRefresh: any
}

export const AuthContext = React.createContext<AuthContextType>(null!);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = React.useState<any>(() => localStorage.getItem("token"));

  const signIn = (newUser: string ,callback: VoidFunction) => {
    localStorage.setItem("token", newUser);
    setUser(newUser);
    callback();
  };

  const signInRefresh = (newUser: string) => {
    localStorage.setItem("refreshToken", newUser);
  };

  const signOut = (callback: VoidFunction) => {
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    setUser(null);
    callback();
  };

  let value = { user, signIn, signInRefresh, signOut};

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}