import axios from "axios";

const axiosinstance = axios.create({
  baseURL: "https://localhost:9000",
});

export default axiosinstance;
