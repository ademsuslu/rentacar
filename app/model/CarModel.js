import mongoose from "mongoose";

const CarSchema = new mongoose.Schema(
  {
    marka: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    yil: {
      type: Number,
      required: true,
    },
    renk: {
      type: String,
      required: true,
    },
    fiyat: {
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

const Car = mongoose.models.Car || mongoose.model("Car", CarSchema);

export default Car;
