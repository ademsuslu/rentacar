import CarCalculate from "@/app/model/CarCalculate";
import dbConnect from "@/app/util/dbConnet";
import { NextResponse } from "next/server";

export async function GET() {
  // Last child al ve hesaplama yap

  await dbConnect();
  const calc = await CarCalculate.find();
  return NextResponse.json(calc);
}

export async function POST(request) {
  await dbConnect();
  const res = await request.json();
  const { MergeForm, carData } = res;
  const { aTarihi, vTarihi, koltuk, sigorta } = MergeForm;

  const data = {
    aTarihi,
    vTarihi,
    koltuk,
    sigorta,
    carData,
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
//   const calculateTotal = (formData) => {
//   const { koltuk, sigorta, car } = formData;
//   const aTarihi = new Date(formData.aTarihi);
//   const vTarihi = new Date(formData.vTarihi);
//   const carInfo = formData.car.split(",");
//   const carId = carInfo[0];
//   const carPrice = parseInt(carInfo[1]);

//   const dateDiff = (date1, date2) => {
//     const diff = new Date(date2).getTime() - new Date(date1).getTime();
//     return Math.ceil(diff / (1000 * 60 * 60 * 24));
//   };

//   const cars = a.find((item) => item._id === carId);
//   console.log(cars);
//   const gun = dateDiff(aTarihi, vTarihi);
//   const koltukUcreti = koltuk ? 10 : 0;
//   const sigortaUcreti = sigorta ? 100 : 0;

//   const toplamUcret = gun * carPrice + koltukUcreti + sigortaUcreti;
//   return { toplamUcret, gun };
// };
