"use client";
import { useQuery } from "@tanstack/react-query";

export const RqCityFetch = async () => {
  const baseUrl = "https://turkiyeapi.cyclic.app/api/v1/provinces/";
  const res = await fetch(baseUrl, { cache: "no-store" });
  const data = await res.json();
  return data;
};

export const useCityData = () => {
  return useQuery({ queryKey: ["rqsuper-city"], queryFn: RqCityFetch });
};
