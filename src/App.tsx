import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Header} from "./components/Header";
import {Login} from "./Pages/Auth/Login";
import {Register} from "./Pages/Auth/Register";
import {HomePage} from "./Pages/Home";
import {ForgotPassWord} from "./Pages/Auth/ForgotPassword";
import {AuthProvider} from "./context/AuthProvider";
import {Questions} from "./Pages/Questions";
import {RequireAuth} from "./components/RequireAuth";
import FreeLesson from "./Pages/OnBoarding";
import {FreeQuestions} from "./Pages/FreeLesson";
import SummaryBord from "./Pages/FreeLesson/components/SummaryBord";
import Plans from "./Pages/PlansPayment/Plans";
import {DashBoard} from "./Pages/Dashboard";


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
          <Route path="/free" element={<FreeLesson/>}/>
          <Route path="/quest/:lesson/:id" element={<FreeQuestions/>}/>
          <Route path="/finish" element={<SummaryBord/>}/>
          <Route path="/plans" element={<Plans/>}/>
          <Route path="/dashboard" element={<DashBoard/>}/>

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
