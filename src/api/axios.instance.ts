/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/naming-convention */
import axios from "axios";
import { BASE_URL } from "react-native-dotenv";

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
