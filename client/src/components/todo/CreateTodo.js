import React from "react";

function CreateTodo({ title, content, textOnChange, createTodoList }) {
  return (
    <form>
      <input
        type="text"
        placeholder="제목을 입력하세요"
        value={title}
        name="title"
        onChange={textOnChange}
      />
      <textarea
        type="text"
        placeholder="할일을 입력하세요"
        value={content}
        name="content"
        onChange={textOnChange}
        rows="5"
      />
      <button type="submit" onClick={createTodoList}>
        투두리스트 생성
      </button>
    </form>
  );
}

export default CreateTodo;
