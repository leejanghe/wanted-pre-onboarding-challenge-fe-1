import styled from "styled-components";

export const TodoLayout = styled.div`
  gap: 20px;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 30px;
  box-sizing: border-box;
`;

export const TodoCardtWrapper = styled.div`
  width: 100%;
  height: 500px;
  padding: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  overflow: auto;
  /* background: #015670; */
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 30px;
  box-sizing: border-box;
  > form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    > textarea {
      width: 322px;
      height: 100px;
      border: 1px solid #ddd;
      border-radius: 5px;
      padding: 10px;
      font-size: 16px;
      font-weight: 400;
      color: #333;
      margin-bottom: 10px;
      outline: none;
      resize: none;
      &:focus {
        border: 1px solid #ff2959;
      }
    }

    > input {
      width: 322px;
      height: 45px;
      border: 1px solid #ddd;
      border-radius: 5px;
      padding: 0 10px;
      font-size: 16px;
      font-weight: 400;
      color: #333;
      margin-bottom: 10px;
      outline: none;
      &:focus {
        border: 1px solid #ff2959;
      }
    }
    > button {
      width: 322px;
      height: 45px;
      border: 1px solid #ddd;
      border-radius: 5px;
      padding: 0 10px;
      font-size: 16px;
      font-weight: 400;
      color: #333;
      margin-bottom: 10px;
      outline: none;
      margin-bottom: 35px;
      &:hover {
        background: #ff2959;
        color: #fff;
        cursor: pointer;
      }
    }
  }
`;

export const TodoContainer = styled.div`
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 10px;
  background: #fff;
  height: 240px;

  > div {
    width: 300px;
    height: 200px;
    padding: 20px;
    box-sizing: border-box;
    border: 1px solid #ddd;
    border-radius: 5px;
    margin-bottom: 10px;
    > h3 {
      font-size: 16px;
      font-weight: 400;
      color: #333;
      margin-bottom: 10px;
    }
    > p {
      font-size: 14px;
      font-weight: 400;
      color: #333;
      margin-bottom: 10px;
    }
    > a {
      font-size: 14px;
      font-weight: 400;
      color: #333;
      margin-bottom: 10px;
    }
    > div {
      button {
        width: 100px;
        height: 30px;
        border: 1px solid #ddd;
        border-radius: 5px;
        padding: 0 10px;
        font-size: 16px;
        font-weight: 400;
        color: #333;
        margin-top: 10px;
        margin-bottom: 10px;
        margin-right: 10px;
        outline: none;
        cursor: pointer;
        &:focus {
          border: 1px solid #ff2959;
        }
        &:hover {
          background: #ff2959;
          color: #fff;
        }
      }
    }
  }
`;

export const TodoDetailContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 30px;
  box-sizing: border-box;
  background-color: #fff;
  border-radius: 15px;
  > h1 {
    font-size: 20px;
    font-weight: 400;
    color: #333;
    margin-bottom: 10px;
  }
  > p {
    font-size: 16px;
    font-weight: 400;
    color: #333;
    margin-bottom: 10px;
  }
`;

export const ModalWrapper = styled.div`
  width: 100vw;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  .ModalContainer {
    background: #fff;
    width: 600px;
    height: 500px;
    position: fixed;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    border-radius: 3px;
    padding: 20px;
    text-align: center;
    .headerText {
      display: flex;
      flex-direction: column;
      align-items: center;
      > h3 {
        font-size: 20px;
        color: #333333;
        font-weight: 700;
        margin-top: 5px;
      }

      > p {
        margin-top: 20px;
        color: #999999;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        > span {
          color: #5683ff;
          > svg {
            font-size: 10px;
          }
        }
      }
      > input {
        margin-top: 20px;
        width: 500px;
        height: 45px;
        border: 1px solid #ddd;
        border-radius: 5px;
        padding: 0 10px;
        font-size: 16px;
        font-weight: 400;
        color: #333;
        margin-bottom: 10px;
        outline: none;
        box-sizing: border-box;
        &:focus {
          border: 1px solid #ff2959;
        }
      }
      > textarea {
        resize: none;
        margin-top: 15px;
        width: 500px;
        border-radius: 5px;
        border: 1px solid #e3e3e3;
        height: 250px;
        font-size: 15px;
        outline-color: #ff2959;
        box-sizing: border-box;
      }
    }
    .alertBtn {
      margin-top: 20px;
      > button {
        cursor: pointer;
        color: #cbcbcb;
        border: 1px solid #cbcbcb;
        background: #fff;
        padding: 15px;
        border-radius: 5px;
        width: 120px;
        margin: 10px;
        &:hover {
          color: red;
          border: 1px solid red;
        }
      }
    }
  }
`;
