import CarCalculate from "@/app/model/CarCalculate";
import dbConnect from "@/app/util/dbConnet";
import { NextResponse } from "next/server";

export async function GET() {
  // Last child al ve hesaplama yap
  await dbConnect();
  const calc = await CarCalculate.find(); // findOne kullanıldı

  const lastCalc = calc[calc.length - 1];

  const { aTarihi, vTarihi, koltuk, sigorta, carData, car } = lastCalc;
  // carData'nın bir dizi olup olmadığını kontrol et
  const carInfo = Array.isArray(carData) ? carData[0] : { _id: "", price: 0 };
  const CarInfo = car.split(",");
  const carId = CarInfo[0];
  const carPrice = parseInt(CarInfo[1]);
  console.log("******************** car  ********************");
  console.log(carPrice);
  // .........................
  // const carId = carInfo._id;
  // carsın içindeki veri hesaplanack

  const dateDiff = (date1, date2) => {
    const diff = new Date(date2).getTime() - new Date(date1).getTime();
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
  };

  const gun = dateDiff(aTarihi, vTarihi);
  const koltukUcreti = koltuk ? 10 : 0;
  const sigortaUcreti = sigorta ? 100 : 0;
  const toplamUcret = gun * carPrice + koltukUcreti + sigortaUcreti;
  const HesapDetay = { toplamUcret, gun };

  return NextResponse.json(HesapDetay);
}

export async function POST(request) {
  await dbConnect();
  const res = await request.json();
  const { MergeForm, carData } = res;
  const { aTarihi, car, vTarihi, koltuk, sigorta } = MergeForm;

  const data = {
    aTarihi,
    vTarihi,
    koltuk,
    sigorta,
    carData,
    car,
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
