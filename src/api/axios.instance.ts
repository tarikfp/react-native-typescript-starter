/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/naming-convention */
import { BASE_URL } from "react-native-dotenv";
import axios from "axios";

const authAxios = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-type": "application/json",
  },
});

authAxios.interceptors.request.use((config) => {
  // business logic...
  // ...
});

export default authAxios;
