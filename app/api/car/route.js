import Car from "@/app/model/CarModel";
import dbConnect from "@/app/util/dbConnet";

export async function GET() {
  //User Bilgisi Eklenebilir
  await dbConnect();
  const car = await Car.find();
  return Response.json(car);
}

//! Car Post
// export async function POST(request) {
//   await dbConnect();
//   const res = await request.json();

//   const car = await Car.create(res);
//   if (!car) {
//     throw new Error("Car create for failded");
//   }
//   return new Response(car, {
//     status: 201,
//     headers: {
//       "Access-Control-Allow-Origin": "*",
//       "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
//       "Access-Control-Allow-Headers": "Content-Type, application/json",
//     },
//   });
// }
