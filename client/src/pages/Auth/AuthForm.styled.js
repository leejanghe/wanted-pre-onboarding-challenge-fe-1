import styled from "styled-components";

export const BackgroundWrapper = styled.div`
  position: fixed;
  top: 40%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  > div {
    width: 650px;
    /* height: 400px; */
    margin: 0 auto;
    padding: 30px 0;
    border: 1px solid #ddd;
    border-radius: 15px;
    box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
    > h5 {
      text-align: center;
      font-size: 30px;
      color: #ff2959;
      margin-bottom: 20px;
      font-weight: 500;
    }
    > p {
      cursor: pointer;
      color: #ff2959;
      text-align: center;
      margin-top: 20px;
      margin-left: 220px;
      font-weight: 400;
      font-size: 12px;
    }

    > form {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .btnForm {
        display: flex;
        /* flex-direction: column; */
        align-items: center;
      }
      > input,
      button {
        width: 322px;
        height: 45px;
        border: 1px solid #ddd;
        border-radius: 5px;
        padding: 0 10px;
        font-size: 16px;
        font-weight: 400;
        color: #333;
        /* cursor: pointer; */
      }
      .active {
        &:hover {
          background: #ff2959;
          color: #fff;
          cursor: pointer;
        }
      }
      > div {
        display: flex;
        align-items: center;
        justify-content: center;
        > span {
          margin-bottom: 10px;
          font-size: 18px;
          font-weight: 400;
          color: #333;
        }
        > input {
          width: 300px;
          height: 40px;
          padding: 0 10px;
          border: 1px solid #ddd;
          border-radius: 5px;
          margin-bottom: 20px;
          font-size: 16px;
          font-weight: 400;
          color: #333;
          outline: none;
          &:focus {
            border: 1px solid #ff2959;
          }
        }
      }
    }
  }
`;
