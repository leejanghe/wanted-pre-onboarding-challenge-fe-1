import React, { useState } from "react";
import authAPI from "../../api/authApi";
import { useNavigate } from "react-router-dom";
import { BackgroundWrapper } from "./AuthStyle.styled";

function AuthForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signAcount, setSignAcount] = useState(true);
  const [passEmail, setPassEmail] = useState(false);
  const [passPwd, setPassPwd] = useState(false);
  const navigate = useNavigate();

  // 이메일, 비밀번호 입력시 유효성 검사 및 택스트 관리
  // todo1: 이메일 조건 : 최소 @, . 포함
  // todo2: 비밀번호 조건 : 최소 8자리
  const textOnChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      setEmail(value);
      if (value.includes("@") && value.includes(".")) {
        setPassEmail(true);
      } else {
        setPassEmail(false);
      }
    } else if (name === "password") {
      setPassword(value);
      if (value.length >= 8) {
        setPassPwd(true);
      } else {
        setPassPwd(false);
      }
    }
  };

  // 회원가입 & 로그인 로직
  // 로그인시 로컬에 토큰 저장
  // 회원가입시 로그인 컴포넌트로 상태 변경
  // todo1: 로그인시 로컬 스토리지에 토큰 저장
  const authSign = async (event) => {
    event.preventDefault();
    try {
      let data;
      if (signAcount) {
        data = await authAPI.signIn({ email, password });
        localStorage.setItem("token", data.token);
        // console.log(data);
        navigate("/");
      } else {
        data = await authAPI.signUp({ email, password });
        // console.log(data);
        setSignAcount(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // 회원가입 & 로그인 컴포넌트 토글
  const toggleAccount = () => setSignAcount((prev) => !prev);

  return (
    <BackgroundWrapper>
      <div>
        {signAcount ? <h5>로그인</h5> : <h5>회원가입</h5>}

        <form onSubmit={authSign}>
          <div>
            <input
              name="email"
              type="text"
              placeholder="Email"
              required
              value={email}
              onChange={textOnChange}
            />
          </div>

          <div>
            <input
              name="password"
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={textOnChange}
            />
          </div>

          <div className={"btnForm"}>
            {/* todo: 이메일, 비밀번호 모두입력 및 조건 만족시 버튼 활성화 */}
            <button
              className={passEmail && passPwd ? "active" : undefined}
              type="submit"
              disabled={!passEmail || !passPwd ? "disabled" : undefined}
            >
              {signAcount ? "로그인" : "회원가입"}
            </button>
          </div>
        </form>
        <p onClick={toggleAccount}>
          {signAcount ? "회원가입 하기" : "로그인 하기"}
        </p>
      </div>
    </BackgroundWrapper>
  );
}

export default AuthForm;
