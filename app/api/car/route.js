import Car from "@/app/model/CarModel";
import dbConnect from "@/app/util/dbConnet";
import { NextResponse } from "next/server";

export async function GET() {
  //User Bilgisi Eklenebilir
  await dbConnect();
  const car = await Car.find();
  return NextResponse.json(car);
}

export async function POST(request) {
  await dbConnect();
  const res = await request.json();

  const car = await Car.create(res);
  if (!car) {
    throw new Error("Car create for failded");
  }
  return new NextResponse(car, {
    status: 201,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, application/json",
    },
  });
}
