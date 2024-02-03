import Settings from "@/app/model/Settings";
import dbConnect from "@/app/util/dbConnet";
import { NextResponse } from "next/server";

export async function GET() {
  //! Admin Bilgisi Eklenmeli
  await dbConnect();
  const setting = await Settings.countDocuments({}); // modeldeki veriyi cekıyor modelın ıcındekılerı kdv otv vb seylerı
  if (setting == 0) {
    const setting = await Settings.create({});
    return NextResponse.json(setting);
  }
  const settings = await Settings.findOne();
  return NextResponse.json(settings);
}

export async function PUT(request) {
  const req = await request.json();
  try {
    //   Update settings
    const updatedSettings = await Settings.findOneAndUpdate(
      {},

      {
        $set: req,
      },
      { new: true }
    );
    return NextResponse.json(updatedSettings);
  } catch (error) {
    return NextResponse.error("Bir hata oluştu ", error);
  }
}
