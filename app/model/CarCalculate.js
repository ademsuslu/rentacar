import mongoose from "mongoose";
const CarCalculateSchema = new mongoose.Schema(
  {
    koltuk: {
      type: String,
      required: true,
    },
    sigorta: {
      type: String,
      required: true,
    },
    aTarihi: {
      type: String,
      required: true,
    },
    vTarihi: {
      type: String,
      required: true,
    },
    carData: {
      type: Array,
    },
  },
  {
    timestamps: true,
  }
);

const CarCalculate =
  mongoose.models.CarCalculate ||
  mongoose.model("CarCalculate", CarCalculateSchema);

export default CarCalculate;
