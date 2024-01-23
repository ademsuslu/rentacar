import mongoose from "mongoose";

const KullaniciSchema = new mongoose.Schema(
  {
    ad: {
      type: String,
      required: true,
    },
    soyad: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    sifre: {
      type: String,
      required: true,
    },
    telefon: {
      type: String,
      required: true,
    },
    adres: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Kullanici =
  mongoose.models.Kullanici || mongoose.model("Kullanici", KullaniciSchema);

export default Kullanici;
