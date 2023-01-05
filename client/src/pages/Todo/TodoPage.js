import React, { useState, useEffect } from "react";
import TodoList from "./TodoList";
import TodoDetail from "./TodoDetail";
import todoAPI from "../../api/todoApi";
import { useParams } from "react-router-dom";
import { TodoLayout } from "./TodoStyle.styled";

function TodoPage(props) {
  const [todoList, setTodoList] = useState([]);
  const [detail, setDetail] = useState({});
  const params = useParams();
  const paramsId = params.id;
  useEffect(() => {
    if (paramsId) {
      getTodoById(paramsId);
    } else {
      return;
    }
  }, [paramsId, setTodoList, todoList]);

  // todo 상세 todo조회
  const getTodoById = async (id) => {
    const { data } = await todoAPI.getTodoById(id);
    setDetail(data);
  };

  return (
    <TodoLayout>
      <TodoList
        todoList={todoList}
        setTodoList={setTodoList}
        setDetail={setDetail}
      />
      {Object.keys(detail).length > 0 ? (
        <TodoDetail
          todoList={todoList}
          setTodoList={setTodoList}
          detail={detail}
          setDetail={setDetail}
        />
      ) : (
        ""
      )}
    </TodoLayout>
  );
}

export default TodoPage;
