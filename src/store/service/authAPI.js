import { api } from "../../helpers/axios";

const loginUser = async (credentials) => {
  try {
    const { data } = await api.post("/auth/login/user", credentials);
    localStorage.setItem("auth", JSON.stringify({ ...data }));
    return data;
  } catch (err) {
    throw new Error(err.response.data.error);
  }
};

const loginOwner = async (credentials) => {
  try {
    const { data } = await api.post("/auth/login/owner", credentials);
    localStorage.setItem("auth", JSON.stringify({ ...data }));
    return data;
  } catch (err) {
    throw new Error(err.response.data.error);
  }
};

const registerUser = async (user) => {
  try {
    const { data } = await api.post("/auth/register/user", user);
    return data;
  } catch (err) {
    throw new Error(err.response.data.message);
  }
};

const registerOwner = async (user) => {
  try {
    const { data } = await api.post("/auth/register/user", user);
    return data;
  } catch (err) {
    throw new Error(err.response.data.message);
  }
};

const authService = {
  loginUser,
  loginOwner,
  registerOwner,
  registerUser,
};

export default authService;
