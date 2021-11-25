import React from "react";

interface AuthContextType {
  user: any;
  signIn: (user: string, callback: VoidFunction) => void;
  signOut: (callback: VoidFunction) => void;
}

export const AuthContext = React.createContext<AuthContextType>(null!);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = React.useState<any>(() => localStorage.getItem("token"));

  const signIn = (newUser: string, callback: VoidFunction) => {
    localStorage.setItem("token", newUser);
    setUser(newUser);
    callback();
  };

  const signOut = (callback: VoidFunction) => {
    localStorage.removeItem("token");
    setUser(null);
    callback();
  };

  let value = { user, signIn, signOut };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}