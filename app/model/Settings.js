import mongoose from "mongoose";
const SettingSchema = new mongoose.Schema(
  {
    vatRate: {
      // kdv
      type: Number,
      required: true,
      default: 20,
    },
    profitPerpentage: {
      // kar oranı
      type: Number,
      required: true,
      default: 10,
    },
    serviceFee: {
      // hizmet ücreti, bu required olmayacak zorunlu değil
      type: Number,
      required: false,
      default: 100,
    },
  },
  {
    timestamps: true,
  }
);

const Settings =
  mongoose.models.Settings || mongoose.model("Settings", SettingSchema);

export default Settings;
