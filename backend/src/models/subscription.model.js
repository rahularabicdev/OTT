import mongoose from "mongoose";

const SubscriptionSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
    },
    points: {
      type: String,
    },
    price: {
      type: Number,
    },
  },
  { timestamps: true }
);

const Subscription = mongoose.model("Subscription", SubscriptionSchema);

export default Subscription;
