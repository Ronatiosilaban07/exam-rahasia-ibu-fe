import api from "./api";

 const Login = async (payload:{
    email: string,
    password: string
 }) => {
  const res = await api.post("/auth/login", payload);
  return res.data;
};

const Register = async (payload:{
    name: string,
    email: string,
    password: string
 }) => {
  const res = await api.post("/auth/login", payload);
  return res.data;
};

const isMe = async () => {
  const res = await api.get("/auth/me");
  return res.data;
};

const getRecipes = async () => {
  const res = await api.get("/recipes");
  return res.data;
};

export { Login, Register, getRecipes, isMe };
