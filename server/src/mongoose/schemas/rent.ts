import mongoose, { Types } from "mongoose";
const { Schema } = mongoose;

const rentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: "",
  },
  showInRecommendation: {
    type: Boolean,
    default: false,
  },
  category: {
    type: Types.ObjectId,
    ref: "Category",
    required: true,
  },
  pickUpLocation: {
    type: Types.ObjectId,
    ref: "Location",
    required: true,
  },
  dropOffLocations: {
    type: [Types.ObjectId],
    ref: "Location",
    required: true,
  },
  fuel: {
    type: String,
    required: true,
  },
  gearBox: {
    type: String,
    required: true,
  },
  capacity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  currency: {
    type: String,
    default: "USD",
  },
  discount: {
    type: Number,
    default: 0,
  },
  images: {
    type: [String],
    required: true,
  },
  reviews: {
    type: [Types.ObjectId],
    ref: "Review",
    default: [],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

rentSchema.set("toJSON", {
  virtuals: true,
  transform: (doc, ret) => {
    delete ret.__v;
  },
});

export default mongoose.model("Rent", rentSchema);
