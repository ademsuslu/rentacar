"use client";
import { useQuery } from "@tanstack/react-query";

export const RqCarFetch = async () => {
  const baseUrl = "http://localhost:3000/api/car";
  const res = await fetch(baseUrl, { cache: "no-store" });
  const data = await res.json();
  return data;
};

export const useCarData = () => {
  return useQuery({ queryKey: ["rqsuper-cars"], queryFn: RqCarFetch });
};
