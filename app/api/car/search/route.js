import Car from "@/app/model/CarModel";
import dbConnect from "@/app/util/dbConnet";

const fuzzySearch = (data) => {
  const fuzzySearchFilter = {};
  Object.keys(data).forEach((key) => {
    fuzzySearchFilter[key] = { $regex: data[key], $options: "i" }; // 'i' for case-insensitive matching
  });
  return fuzzySearchFilter;
};

//! /api/car/search to Car Search for post process
export async function POST(request) {
  await dbConnect();

  const req = await request.json();

  const filter = fuzzySearch({ marka: req });

  const res = await Car.find(filter);
  return Response.json({ data: res }); // datayı direkt olarak objecte cevırdı
}
