import { API_URL } from "@/utils/constants";
import axios from "axios";

console.log("api ", process.env.API_KEY);
export const bffInstance = axios.create({
  baseURL: API_URL,
  params: {
    key: process.env.API_KEY,
  },
});
