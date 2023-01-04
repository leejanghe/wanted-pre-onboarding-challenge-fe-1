import React from "react";

import { useNavigate } from "react-router-dom";
import { HeaderWrap } from "./Header.styled";

function Header({ isLoggedIn }) {
  //   console.log("selectedNav", selectedNav, window.location.pathname, 12);
  const navigate = useNavigate();

  // 로그아웃
  const onClickSignOut = () => {
    localStorage.removeItem("token");
    navigate("/auth");
  };
  return (
    <HeaderWrap>
      <div className="menuText">
        <span onClick={onClickSignOut}>로그아웃</span>

        {/* <span>회원가입</span> */}
      </div>
    </HeaderWrap>
  );
}

export default Header;
