import instance from "./instance";

// Todo API
const todoAPI = {
  getTodoList: async () => {
    const { data } = await instance.get("/todos");
    return data;
  },
  getTodoById: async (id) => {
    const { data } = await instance.get(`/todos/${id}`);
    return data;
  },
  createTodo: async (title, content) => {
    const { data } = await instance.post("/todos", { title, content });
    return data;
  },
  deleteTodo: async (id) => {
    const { data } = await instance.delete(`/todos/${id}`);
    return data;
  },
  updateTodo: async (id, title, content) => {
    const { data } = await instance.put(`/todos/${id}`, { title, content });
    return data;
  },
};

export default todoAPI;
