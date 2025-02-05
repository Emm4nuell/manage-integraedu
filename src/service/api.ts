import axios from "axios";

const instance = axios.create({
  baseURL: "http://206.42.51.75:8081/manage_store/v1",
});

export default instance;
