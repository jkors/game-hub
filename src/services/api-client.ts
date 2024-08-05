import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "adb3780fb16f4770bee348705e87948a",
  },
});
