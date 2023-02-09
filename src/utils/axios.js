import axios from "axios";

const axiosinstance = axios.create({
  baseURL: "http://localhost:9000",
});

export default axiosinstance;
