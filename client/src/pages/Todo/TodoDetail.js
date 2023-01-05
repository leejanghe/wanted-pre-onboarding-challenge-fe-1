import React from "react";
import { TodoDetailContainer } from "./TodoStyle.styled";

function TodoDetail({ detail }) {
  const { content, createdAt, title, updatedAt } = detail;

  return (
    <TodoDetailContainer>
      <h1>Todo 상세</h1>
      <p>제목 : {title}</p>
      <p>내용 : {content}</p>
      <p>생성일 : {createdAt.split("T")[0]}</p>
      <p>업데이트 : {updatedAt.split("T")[0]}</p>
    </TodoDetailContainer>
  );
}

export default TodoDetail;
