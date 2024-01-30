import CarCalculate from "@/app/model/CarCalculate";
import dbConnect from "@/app/util/dbConnet";
import { NextResponse } from "next/server";

export async function GET() {
  //  Get işleminde hesaplama yapılıcak
  await dbConnect();
  const calc = await CarCalculate.find();
  return NextResponse.json(calc);
}

export async function POST(request) {
  await dbConnect();
  const res = await request.json();
  console.log(
    "BACK END LOGU *****************************************************************",
    res.Merge
  );

  const { MergeForm, carDataArr } = res.Merge;

  const { aTarihi, vTarihi, koltuk, sigorta } = MergeForm;

  const data = {
    aTarihi,
    vTarihi,
    koltuk,
    sigorta,
    carData: carDataArr,
  };
  const calc = await CarCalculate.create(data);

  if (!calc) {
    throw new Error("Car create for failded");
  }
  return new NextResponse(calc, {
    status: 201,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}

// export async function PUT(request) {}

// export async function DELETE(request) {}
