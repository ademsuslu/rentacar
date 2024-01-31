"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
export const getCalc = async () => {
  const baseUrl = "http://localhost:3000/api/carcalculate";
  try {
    const res = await fetch(baseUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Bir hata oluştu:", error);
    throw error;
  }
};

export const Carcalculate = () => {
  return useQuery({ queryKey: ["rqsuper-calc"], queryFn: getCalc });
};

export const createCalc = async (Merge) => {
  const baseUrl = "http://localhost:3000/api/carcalculate";
  try {
    const res = await axios.post(baseUrl, Merge);
    if (!res.status === 201) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    return res;
  } catch (error) {
    throw error;
  }
};
