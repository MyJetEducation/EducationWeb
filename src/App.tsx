import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import {Auth} from "./ui/Auth";
import {Plans} from "./ui/PlansPayment/Plans";
import {Register} from "./ui/Register";
import {HomePage} from "./ui/Home";
import {DashBoard} from "./ui/Dashboard";
import {SummaryBord} from "./ui/Lesson/components/SummaryBord";
import {RequireAuth} from "./services/RequireAuth";
import {AuthProvider} from "./services/AuthProvider";
import {Lesson} from "./ui/Lesson";
import TestTranslate from "./ui/Test";
import ZeroQuizLesson from "./ui/ZeroQuizLesson";
import {Header} from "./ui/components/Header";
import RenderTest from "./ui/Lesson/components/Tasks/RenderTest";
import RetryTest from "./ui/Lesson/components/Retry/Test";
import Retry from "./ui/Lesson/components/Retry";

export const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/login" element={<Auth/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/test" element={<TestTranslate/>}/>
          <Route path="/zero-lesson" element={<ZeroQuizLesson/>}/>
          <Route path="/:confirm/:hash" element={<Register/>}/>

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
          <Route path="/:tutorial/:unit/:id" element={(
            <RequireAuth>
              <Lesson/>
            </RequireAuth>
          )}/>
          <Route path="/retry/:tutorial/:unit/:id" element={(
            <RequireAuth>
              <Retry/>
            </RequireAuth>
          )}/>
          <Route path="/:tutorial/:unit/:id/summary" element={(
            <RequireAuth>
              <SummaryBord/>
            </RequireAuth>
          )}/>
        </Routes>
      </BrowserRouter>
    </AuthProvider>

  )
}
