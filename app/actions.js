"use server";

export async function getCarDetay(id) {
  const url = `http:localhost:3000/api/car/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  return data;
}
