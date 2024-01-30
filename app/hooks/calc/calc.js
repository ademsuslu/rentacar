"use client";

import { useQuery } from "@tanstack/react-query";
/*
  ilk önce server action oluşturuyoruz
  api/deneme/route.js ile oluşturduk
  sonra server action olduğunu belirtmek için use server yazdık en başa
  daha sonra atılacak istekleri buraya fonksiyon olarak girdik
  burası işin backend kısmı
  frontendde ise usequery ya da usemutation kullanıp buradaki oluşturduğun
*/

export const getCalc = async () => {
  const baseUrl = "http://localhost:3000/api/carcalculate";
  const res = await fetch(baseUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });
  const data = await res.json();
  return data;
};

export const Carcalculate = () => {
  return useQuery({ queryKey: ["rqsuper-calc"], queryFn: getCalc });
};
export const createCalc = async (Merge) => {
  const baseUrl = "http://localhost:3000/api/carcalculate";
  console.log(Merge);

  try {
    const res = await fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-store", // Cache kontrolü için
      },
      body: JSON.stringify(Merge),
    });

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Bir hata oluştu:", error);
    // Hata durumunda uygun bir işlem yapabilirsiniz, örneğin kullanıcıya bilgi verme
    throw error; // Hatanın yukarıya iletilmesi
  }
};
