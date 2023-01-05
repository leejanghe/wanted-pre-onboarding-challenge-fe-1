import React from "react";
import { Router, Route, Routes } from "react-router-dom";
import Header from "../components/header/Header";
import AuthPage from "../pages/Auth/AuthPage";
import TodoPage from "../pages/Todo/TodoPage";
function AppRouter({ isLoggedIn }) {
  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <Routes>
        <Route exact path="/" element={<TodoPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path=":id" element={<TodoPage />} />
      </Routes>
    </>
  );
}

export default AppRouter;
