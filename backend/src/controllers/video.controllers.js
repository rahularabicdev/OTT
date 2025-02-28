import Video from "../models/video.model.js";
import ApiError from "../utils/apiError.js";
import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/apiResponse.js";
import {
  isFileEmptyValidation,
  notEmptyValidation,
} from "../utils/validators.js";

// Fetch All Videos
export const fetchAllVideosController = asyncHandler(async (req, res) => {
  /**
   * TODO: Get Videos
   * TODO: Sending Response
   * **/

  // * Fetch All Videos
  const videos = await Video.find();

  // * Sending Response
  res
    .status(200)
    .json(new ApiResponse(200, videos, "Vidoes fetched successfully!"));
});

// Create Video Controller
export const createVideoController = asyncHandler(async (req, res) => {
  /**
   * TODO: Get data from frontend
   * TODO: Validate Data
   * TODO: If Correct, Create Video
   * TODO: Sending Response
   * **/

  // * Get Data From Frontend
  const { title, description, duration, category, genres } = req.body;

  // * Validate Input
  notEmptyValidation([title, description, duration, category, genres]);

  // * Check if Video Exist
  const existingVideo = await Video.findOne({ title });
  if (existingVideo) throw new ApiError(409, `${title} video already exists`);

  // * Create New Video
  const video = new Video({
    title,
    description,
    duration,
    category,
    genres,
  });
  await video.save();

  // * Sending Response
  res
    .status(201)
    .json(new ApiResponse(201, video, "Video created successfully!"));
});
