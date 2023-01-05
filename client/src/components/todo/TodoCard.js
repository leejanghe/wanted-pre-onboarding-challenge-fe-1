import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TodoContainer } from "../../pages/Todo/TodoStyle.styled";

function TodoCard({
  id,
  title,
  content,
  deleteTodoList,
  setShowModal,
  setUserId,
}) {
  const fixTodoModal = (id) => {
    setUserId(id);
    setShowModal(true);
  };

  return (
    <TodoContainer>
      <div key={id}>
        <h3>{title}</h3>
        <p>{content}</p>
        <Link to={`/${id}`}>상세조회</Link>
        <div>
          <button onClick={() => deleteTodoList(id)}>삭제</button>
          <button onClick={() => fixTodoModal(id)}>수정</button>
        </div>
      </div>
    </TodoContainer>
  );
}

export default TodoCard;
