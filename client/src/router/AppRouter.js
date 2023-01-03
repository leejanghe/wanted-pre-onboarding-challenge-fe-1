import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthPage from "../pages/AuthPage";
import TodoPage from "../pages/TodoPage";
function AppRouter(props) {
  return (
    <Router>
      {/* <Header isLoggedIn={isLoggedIn} /> */}
      <Routes>
        <Route exact path="/" element={<TodoPage />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
