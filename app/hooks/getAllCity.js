import axios from "axios";
import { useQuery } from "react-query";

const RqCityFetch = () => {
  return axios.get("https://turkiyeapi.cyclic.app/api/v1/provinces/", {
    headers: {
      "Cache-Control": "no-cache",
      Pragma: "no-cache",
      Expires: "0",
    },
  });
};
export const useCityData = () => {
  return useQuery("rqsuper-city", RqCityFetch);
};
