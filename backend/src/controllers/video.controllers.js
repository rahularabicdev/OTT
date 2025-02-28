import mongoose from "mongoose";

import Video from "../models/video.model.js";
import ApiError from "../utils/apiError.js";
import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/apiResponse.js";
import { notEmptyValidation } from "../utils/validators.js";

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
  const existingVideo = await Video.findOne({ title, category });
  if (existingVideo)
    throw new ApiError(409, `${title} video already exists in this category`);

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

// Upload Video Thumbnail Controller
export const uploadVideoThumbnailController = asyncHandler(async (req, res) => {
  /**
   * TODO: Get Video Id from Query
   * TODO: Get file from Frontend
   * TODO: Upload File
   * TODO: Sending Response
   * **/

  // * Get Video Id from Query
  const { id } = req.params;

  // * Validate Video Id
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new ApiError(400, "Invalid video id");
  }

  // * Find Video by Id
  const video = await Video.findById(id);
  if (!video) throw new ApiError(404, "Video not found");

  // * Get File from Frontend
  const thumbnail = req.file?.path;
  if (!thumbnail) throw new ApiError(400, "No thumbnail provided");

  // * Update Video Thumbnail
  video.thumbnail_url = thumbnail;
  await video.save();

  // * Sending Response
  res
    .status(200)
    .json(new ApiResponse(200, video, "Video thumbnail updated successfully!"));
});
