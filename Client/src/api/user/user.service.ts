import axios from "axios";
import { Register } from "./user.interface";
export default {
  async register(data: Register) {
    const res = await axios.post("http://localhost:3000/user/register", data);
    return res.data;
  },
};
