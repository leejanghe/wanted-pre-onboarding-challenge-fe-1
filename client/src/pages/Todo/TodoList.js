import React, { useEffect, useMemo, useState } from "react";
import todoAPI from "../../api/todoApi";
import TodoCard from "../../components/todo/TodoCard";
import CreateTodo from "../../components/todo/CreateTodo";
import { ListContainer, TodoCardtWrapper } from "./TodoStyle.styled";
import TodoFixModal from "../../components/modals/TodoFixModal";

const TodoList = ({ todoList, setTodoList, setDetail }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [userId, setUserId] = useState("");
  useEffect(() => {
    getTodoList();
  }, []);
  console.log("todoList", todoList);

  // todo & content 값 변경
  const textOnChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "title") {
      setTitle(value);
    } else if (name === "content") {
      setContent(value);
    }
  };

  // todo 리스트 조회
  const getTodoList = async () => {
    const { data } = await todoAPI.getTodoList();
    setTodoList(data);
  };

  // todo 생성
  const createTodoList = async (event) => {
    event.preventDefault();
    if (title === "" || content === "") {
      alert("제목과 내용을 입력해주세요");
      return;
    }
    setTitle("");
    setContent("");
    const { data } = await todoAPI.createTodo(title, content);
    setTodoList([...todoList, data]);
  };

  // todo 삭제
  const deleteTodoList = async (id) => {
    await todoAPI.deleteTodo(id);
    setTodoList(todoList.filter((todo) => todo.id !== id));
    setDetail({});
  };

  //   // todo 수정
  //   const updateTodoList = async (id) => {
  //     const { data } = await todoAPI.updateTodo(id, title, content);
  //     setTodoList(todoList.map((todo) => (todo.id === id ? data : todo)));
  //   };

  return (
    <>
      <ListContainer>
        <CreateTodo
          title={title}
          content={content}
          textOnChange={textOnChange}
          createTodoList={createTodoList}
        />
        <TodoCardtWrapper>
          {todoList &&
            todoList.map((todo) => (
              <TodoCard
                key={todo.id}
                id={todo.id}
                title={todo.title}
                content={todo.content}
                deleteTodoList={deleteTodoList}
                setShowModal={setShowModal}
                showModal={showModal}
                setUserId={setUserId}
                userId={userId}
              />
            ))}
        </TodoCardtWrapper>
        {showModal && (
          <TodoFixModal
            setShowModal={setShowModal}
            userId={userId}
            todoList={todoList}
            setTodoList={setTodoList}
          />
        )}
      </ListContainer>
    </>
  );
};

export default TodoList;
