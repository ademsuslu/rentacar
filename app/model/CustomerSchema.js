import mongoose from "mongoose";

const CustomerSchema = new mongoose.Schema(
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

const Customer =
  mongoose.models.Customer || mongoose.model("Customer", CustomerSchema);

export default Customer;
