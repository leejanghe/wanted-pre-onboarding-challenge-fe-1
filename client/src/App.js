import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import AppRouter from "./router/AppRouter";

// css초기화
const GlobalResetStyle = createGlobalStyle`
  ${reset}
`;
function App() {
  console.log(localStorage.token);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

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
  console.log("isLoggedIn", isLoggedIn);
  return (
    <>
      <GlobalResetStyle />
      <AppRouter />
    </>
  );
}

export default App;
