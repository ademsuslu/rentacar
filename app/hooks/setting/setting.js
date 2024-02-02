"use client";
import axios from "axios";

// POST
export const createSetting = async (data) => {
  const baseUrl = "http://localhost:3000/api/setting";
  try {
    const res = await axios.put(baseUrl, data);
    if (!res.status === 201) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    return res;
  } catch (error) {
    throw error;
  }
};
