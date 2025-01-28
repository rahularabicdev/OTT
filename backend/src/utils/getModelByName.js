import Genre from "../models/genre.model.js";
import MediaChunk from "../models/media-chunk.model.js";
import Payment from "../models/payment.model.js";
import Subscription from "../models/subscription.model.js";
import UserRole from "../models/user-role.model.js";
import UserSubscription from "../models/user-subscription.model.js";
import User from "../models/user.model.js";
import Video from "../models/video.model.js";

// Get Model by name
const getModelByName = (modelName) => {
  switch (modelName) {
    case "Genre":
      return Genre;
    case "MediaChunk":
      return MediaChunk;
    case "Payment":
      return Payment;
    case "Subscription":
      return Subscription;
    case "UserRole":
      return UserRole;
    case "UserSubscription":
      return UserSubscription;
    case "User":
      return User;
    case "Video":
      return Video;
    default:
      return null;
  }
};

export default getModelByName;
