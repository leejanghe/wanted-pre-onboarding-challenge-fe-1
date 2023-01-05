import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import AppRouter from "./router/AppRouter";

// css초기화
const GlobalResetStyle = createGlobalStyle`
  ${reset}
  body {
    background-color: #f5f5f5;
  }
`;
function App() {
  // console.log(localStorage.token);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // 로그인(토큰) 여부에 따른 페이지 이동
  // todo1: 토큰 존재 여부에 따른 경료 이동
  // todo2: 토큰 없을 경우 사용자에게 알리기 (alert)
  useEffect(() => {
    if (localStorage.token) {
      setIsLoggedIn(true);
      if (window.location.pathname === "/auth") {
        alert("이미 로그인 되어있습니다.");
        navigate("/", { replace: true });
      }
    } else {
      setIsLoggedIn(false);
      if (window.location.pathname !== "/auth") {
        alert("로그인을 해주세요.");
        navigate("/auth", { replace: true });
      }
    }
  }, [window.location.pathname, navigate, isLoggedIn]);
  // console.log("isLoggedIn", isLoggedIn);
  return (
    <>
      <GlobalResetStyle />
      <AppRouter isLoggedIn={isLoggedIn} />
    </>
  );
}

export default App;
