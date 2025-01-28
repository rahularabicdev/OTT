import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
    },
    release_date: {
      type: Date,
    },
    duration: {
      type: Number,
    },
    media: {
      type: String,
    },
    content_rating: {
      type: String,
      enum: ["G", "PG", "PG-13", "R"],
    },
    genres: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Genre",
      },
    ],
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  { timestamps: true }
);

const Video = mongoose.model("Video", VideoSchema);

export default Video;
