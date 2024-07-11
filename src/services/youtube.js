import { API_URL } from "@/utils/constants";
import axios from "axios";

export const bffInstance = axios.create({
  baseURL: API_URL,
  timeout: 5000,
  params: {
    key: process.env.API_KEY,
  },
});
