import React from "react";

import { useNavigate } from "react-router-dom";
import { HeaderWrap } from "./Header.styled";

function Header({ isLoggedIn }) {
  const navigate = useNavigate();
  //   console.log(isLoggedIn, "isLoggedIn");
  // 로그아웃
  const onClickSignOut = () => {
    localStorage.removeItem("token");
    navigate("/auth");
  };
  return (
    <HeaderWrap>
      <div className="menuText">
        {isLoggedIn ? (
          <>
            <span>Wanted-pre-onboarding-challenge ToDo-List</span>
            <span onClick={onClickSignOut}>로그아웃</span>
          </>
        ) : (
          <span>Wanted-pre-onboarding-challenge ToDo-List</span>
        )}

        {/* <span>회원가입</span> */}
      </div>
    </HeaderWrap>
  );
}

export default Header;
