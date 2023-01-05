import React, { useState } from "react";
import { ModalWrapper } from "../../pages/Todo/TodoStyle.styled";
import todoAPI from "../../api/todoApi";

// todo 수정 모달
export const TodoFixModal = ({
  setShowModal,
  userId,
  setTodoList,
  todoList,
}) => {
  const [fixTitle, setFixTitle] = useState("");
  const [fixContent, setFixContent] = useState("");

  const fixTextOnChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "fixTitle") {
      setFixTitle(value);
    } else if (name === "fixContent") {
      setFixContent(value);
    }
  };

  // todo 수정
  const updateTodoList = async (id) => {
    const { data } = await todoAPI.updateTodo(userId, fixTitle, fixContent);
    setTodoList(todoList.map((todo) => (todo.id === id ? data : todo)));
    setFixContent("");
    setFixTitle("");
    setShowModal(false);
  };

  return (
    <ModalWrapper>
      <div className="ModalContainer">
        <div className="headerText">
          <h3>todo 수정하기!</h3>
          <input
            type="text"
            placeholder="제목을 입력하세요"
            value={fixTitle}
            name="fixTitle"
            onChange={fixTextOnChange}
          />
          <textarea
            type="text"
            placeholder="할일을 입력하세요"
            value={fixContent}
            name="fixContent"
            onChange={fixTextOnChange}
            rows="5"
          />
        </div>
        <div className="alertBtn">
          <button onClick={() => updateTodoList()}>수정</button>
          <button onClick={() => setShowModal(false)}>닫기</button>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default TodoFixModal;
