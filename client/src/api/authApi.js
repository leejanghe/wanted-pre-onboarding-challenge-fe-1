import instance from "./instance";

// 로그인, 회원가입 API
const authAPI = {
  signIn: async ({ email, password }) => {
    const { data } = await instance.post("/users/login", { email, password });
    return data;
  },

  signUp: async ({ email, password }) => {
    const { data } = await instance.post("/users/create", { email, password });
    return data;
  },
};

export default authAPI;
