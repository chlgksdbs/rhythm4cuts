import axios from "axios";

export const login = async (email, password) => {
  const result = await axios.post("member/login", {
    email,
    password,
  });
  return result;
};
