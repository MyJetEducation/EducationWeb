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
import RegisterConfirm from "./ui/Confirm";
import ConfirmDonePage from "./ui/Confirm/conponents/confirmDonePage";
import FreeLesson from "./ui/FreeLesson";
import MarketPage from "./ui/Market";
import Profile from "./ui/Profile";
import AchievementsPage from "./ui/AchievementsPage";

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
          <Route path="/register-confirm" element={<RegisterConfirm/>}/>
          <Route path="/free" element={<FreeLesson/>}/>

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
          <Route path="/:tutorial/:unit/:id/summary" element={(
            <RequireAuth>
              <SummaryBord/>
            </RequireAuth>
          )}/>
          <Route path="/register-confirm-done" element={(
            <RequireAuth>
              <ConfirmDonePage/>
            </RequireAuth>
          )}/>
          <Route path="/market" element={(
            <RequireAuth>
              <MarketPage/>
            </RequireAuth>
          )}/>
          <Route path="/profile" element={(
            <RequireAuth>
              <Profile/>
            </RequireAuth>
          )}/>
          <Route path="/profile/achievements" element={(
            <RequireAuth>
              <AchievementsPage/>
            </RequireAuth>
          )}/>
        </Routes>
      </BrowserRouter>
    </AuthProvider>

  )
}
