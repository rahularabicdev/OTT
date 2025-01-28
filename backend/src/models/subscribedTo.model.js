import mongoose from "mongoose";

const SubscribedToSchema = new mongoose.Schema(
  {
    subscription_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Subscription",
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    start_date: {
      type: Date,
    },
    end_date: {
      type: Date,
    },
  },
  { timestamps: true }
);

const SubscribedTo = mongoose.model("SubscribedTo", SubscribedToSchema);

export default SubscribedTo;
