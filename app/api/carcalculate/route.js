import Settings from "@/app/model/Settings";
import dbConnect from "@/app/util/dbConnet";

//! Get işlemi
// body içinden gelen bilgilere göre hesaplama yap
// gelen bilgiler; araç idsi, alış tarihi, teslim tarihi, özelikler
// toplamFiyat = aracFiyatı + (aracFiyatı * vatRate / 100) + özellik fiyatları
// bu fiyatı frontende gönder
export async function POST(request) {
  // Last child al ve hesaplama yap
  await dbConnect();

  const s = await Settings.findOne();
  const req = await request.json();

  const { MergeForm, carData } = req;
  console.log(req);
  const { aTarihi, vTarihi, koltuk, sigorta, car } = MergeForm;
  if (!s) return Response.error("Settings null");

  const carInfo = Object(car) ? car[0] : { _id: "", price: 0 };
  console.log("car Info: ", carInfo);
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
  const { vatRate, profitPerpentage, serviceFee } = s;
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

  return Response.json(HesapDetay);
}
