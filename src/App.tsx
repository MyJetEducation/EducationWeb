import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import {Login} from "./Pages/Auth/Login";
import {Plans} from "./Pages/PlansPayment/Plans";
import {Header} from "./components/Header";
import {Register} from "./Pages/Auth/Register";
import {HomePage} from "./Pages/Home";
import {DashBoard} from "./Pages/Dashboard";
import {Questions} from "./Pages/Questions";
import {FreeLesson} from "./Pages/OnBoarding";
import {SummaryBord} from "./components/LessonComponents/SummaryBord";
import {RequireAuth} from "./components/RequireAuth";
import {AuthProvider} from "./context/AuthProvider";
import {FreeQuestions} from "./Pages/FreeLesson";
import {ForgotPassWord} from "./Pages/Auth/ForgotPassword";
import {Lesson} from "./Pages/Сourse/Lesson";
import TestTranslate from "./Pages/Test";
import ZeroQuizLesson from "./Pages/ZeroQuizLesson";

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
          <Route path="/test" element={<TestTranslate/>}/>
          <Route path="/zero-lesson" element={<ZeroQuizLesson/>}/>
          <Route path="/start" element={(
            <RequireAuth>
              <Questions/>
            </RequireAuth>
          )}/>
          <Route path="/plans" element={(
            <RequireAuth>
              <Plans/>
            </RequireAuth>

          )}/>

          <Route path="/dashboard" element={(
            <RequireAuth>
              <DashBoard/>
            </RequireAuth>

          )}/>
          <Route path="/:unit/:id" element={(
            <RequireAuth>
              <Lesson/>
            </RequireAuth>

          )}/>
          <Route path="/:unit/:id/summary" element={(
            <RequireAuth>
              <SummaryBord/>
            </RequireAuth>

          )}/>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}
