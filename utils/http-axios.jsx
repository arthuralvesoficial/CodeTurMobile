import axios from "axios";

export default axios.create({
  baseURL: "http://192.168.0.20:5421/v1/",
  headers: {
    "Content-type": "application/json"
  }
});
