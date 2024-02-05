"use client";
import axios from "axios";

// export const Carcalculate = () => {
//   const query = useQuery({
//     queryKey: ["rqsuper-calc"],
//     queryFn: async () => {
//       const baseUrl = "http://localhost:3000/api/carcalculate";
//       try {
//         const res = await axios.get(baseUrl);
//         if (res.status !== 200) {
//           throw new Error(`HTTP error! Status: ${res.status}`);
//         }
//         return res.data;
//       } catch (error) {
//         console.error("Bir hata oluştu:", error);
//         throw error;
//       }
//     },
//   });

//   return query;
// };

// POST

export const SearchData = async (data) => {
  const baseUrl = `http://localhost:3000/api/car`;
  try {
    const res = await axios.get(baseUrl, {
      params: {
        q: data,
      },
    });

    if (res.status !== 200) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    return res.data;
  } catch (error) {
    throw error;
  }
};
