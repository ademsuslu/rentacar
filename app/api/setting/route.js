import Settings from "@/app/model/Settings";
import dbConnect from "@/app/util/dbConnet";

export async function GET() {
  //! Admin Bilgisi Eklenmeli
  await dbConnect();
  const setting = await Settings.countDocuments({}); // modeldeki veriyi cekıyor modelın ıcındekılerı kdv otv vb seylerı
  if (setting == 0) {
    const setting = await Settings.create({});
    return Response.json(setting);
  }
  const settings = await Settings.findOne();
  return Response.json(settings);
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
    return Response.json(updatedSettings);
  } catch (error) {
    return Response.error("Bir hata oluştu ", error);
  }
}
