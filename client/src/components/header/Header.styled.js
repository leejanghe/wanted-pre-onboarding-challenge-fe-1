import styled from "styled-components";

export const HeaderWrap = styled.div`
  width: 100%;
  height: 60px;
  background: #fff;
  top: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
  z-index: 999;
  margin-bottom: 20px;
  .menuText {
    cursor: pointer;
    > span {
      margin-left: 35px;
      color: #333;
      /* color: #fff; */
      text-decoration: none;
      margin-bottom: 10px;
      font-weight: 500;
      font-size: 17px;
      &.highlight {
        color: #ff2959;
      }
      &:nth-child(4) {
        color: #fff;
        background: #ff2959;
        border-radius: 25px;
        padding: 10px 20px 10px 20px;
      }
      &:nth-child(5) {
        color: #ff2959;
        background-color: rgb(255, 41, 89, 0.1);
        border-radius: 25px;
        padding: 10px 20px 10px 20px;
      }
    }
  }
`;
