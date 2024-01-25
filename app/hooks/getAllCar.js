import axios from "axios";
import { useQuery } from "react-query";

const RqCarFetch = () => {
  return axios.get(
    "https://cors-anywhere.herokuapp.com/http://localhost:3000/api/car"
  );
};
export const useCarData = () => {
  return useQuery("rqsuper-heros", RqCarFetch);
};
