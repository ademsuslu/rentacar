import mongoose from "mongoose";
import Car from "./carModel";
import Kullanici from "./kullaniciSchema";

const RezervasyonSchema = new mongoose.Schema(
  {
    arac_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: Car, // Car modeline referans
      required: true,
    },
    kullanici_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: Kullanici, // Kullanici modeline referans
      required: true,
    },
    baslangic_tarihi: {
      type: Date,
      required: true,
    },
    bitis_tarihi: {
      type: Date,
      required: true,
    },
    toplam_fiyat: {
      type: Number,
      required: true,
    },
    durum: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Rezervasyon =
  mongoose.models.Rezervasyon ||
  mongoose.model("Rezervasyon", RezervasyonSchema);

export default Rezervasyon;
