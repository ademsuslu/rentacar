import CarCalculate from "@/app/model/CarCalculate";
import Settings from "@/app/model/Settings";
import dbConnect from "@/app/util/dbConnet";
import { NextResponse } from "next/server";

//! Get işlemi
export async function GET() {
  // Last child al ve hesaplama yap
  await dbConnect();
  const Set = await Settings.findOne();

  const calc = await CarCalculate.find(); // findOne kullanıldı

  const lastCalc = calc[calc.length - 1];

  const { aTarihi, vTarihi, koltuk, sigorta, carData, car } = lastCalc;
  const carInfo = Array.isArray(carData) ? carData[0] : { _id: "", price: 0 };
  const CarInfo = car.split(",");
  const carId = CarInfo[0];
  const carPrice = parseInt(CarInfo[1]);

  const carDetail = carData.find((item) => item._id === carId);

  const dateDiff = (date1, date2) => {
    const diff = new Date(date2).getTime() - new Date(date1).getTime();
    let daysDiff = Math.ceil(diff / (1000 * 60 * 60 * 24));

    if (daysDiff === 0) {
      daysDiff += 1;
    }

    return daysDiff;
  };

  const Days = dateDiff(aTarihi, vTarihi);
  const koltukUcreti = koltuk ? 10 : 0;
  const sigortaUcreti = sigorta ? 100 : 0;
  const { vatRate, profitPerpentage, serviceFee } = Set;
  const toplamUcret = Days * carPrice + koltukUcreti + sigortaUcreti;
  const kdvUcretı = toplamUcret * vatRate;
  const total = toplamUcret + kdvUcretı;

  const { marka, model, image, fiyat } = carDetail;
  const HesapDetay = {
    total,
    Days,
    marka,
    model,
    image,
    fiyat,
    vatRate,
    profitPerpentage,
    serviceFee,
  };

  return NextResponse.json(HesapDetay);
}

//! Post işlemi
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
