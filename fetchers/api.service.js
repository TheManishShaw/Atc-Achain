import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL_DEV,
});

apiClient.interceptors.request.use();

export default apiClient;
