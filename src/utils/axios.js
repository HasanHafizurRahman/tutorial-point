import axios from "axios";

const axiosinstance = axios.create({
  baseURL: "https://json-server-apis.onrender.com",
});

export default axiosinstance;
