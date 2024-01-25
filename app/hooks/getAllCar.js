import axios from "axios";
import { useQuery } from "react-query";

const RqCarFetch = () => {
  return axios.get("http://localhost:3000/api/car", {
    headers: {
      "Cache-Control": "no-cache",
      Pragma: "no-cache",
      Expires: "0",
    },
  });
};
export const useCarData = () => {
  return useQuery("rqsuper-heros", RqCarFetch);
};
