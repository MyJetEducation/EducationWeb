import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Header} from "./components/Header";
import {Login} from "./Pages/Login";
import {Register} from "./Pages/Register";
import {HomePage} from "./Pages/Home";
import {ForgotPassWord} from "./Pages/ForgotPassword";
import {AuthProvider} from "./context/AuthProvider";
import {Questions} from "./Pages/Questions";
import {RequireAuth} from "./components/RequireAuth";

export const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/forgot" element={<ForgotPassWord/>}/>
          <Route path="/start" element={(
            <RequireAuth>
              <Questions/>
            </RequireAuth>
          )}/>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}