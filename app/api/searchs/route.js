import Car from "@/app/model/CarModel";
import dbConnect from "@/app/util/dbConnet";
import { NextResponse } from "next/server";

//Get isteğinide yaz
// export async function GET() {
//   try {
//     return new NextResponse.json("Get Aktif.", {
//       status: 200,
//       headers: {
//         "Access-Control-Allow-Origin": "*",
//         "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
//         "Access-Control-Allow-Headers": "Content-Type, application/json",
//       },
//     });
//   } catch (error) {
//     console.error("Arama hatası:", error);
//     return new NextResponse.error("Hatalı işlem");
//   }
// }

export async function POST(request) {
  //User Bilgisi Eklenebilir
  await dbConnect();
  try {
    const req = await request.json();

    const res = req.query;

    return new NextResponse.json("Başarılı", {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, application/json",
      },
    });
  } catch (error) {
    console.error("Arama hatası:", error);
    return new NextResponse.json("Hatalı işlem");
  }
}
