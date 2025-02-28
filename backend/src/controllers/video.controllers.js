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

// ! Upload Video Controller
export const uploadVideoController = asyncHandler(async (req, res) => {
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
  const videoExist = await Video.findById(id);
  if (!videoExist) throw new ApiError(404, "Video not found");

  // * Get File from Frontend
  const video = req.file?.path;
  if (!video) throw new ApiError(400, "No Video provided");

  // * Update Video Thumbnail
  videoExist.video_url = video;
  await videoExist.save();

  // * Sending Response
  res
    .status(200)
    .json(new ApiResponse(200, videoExist, "Video updated successfully!"));
});

// Update Video Details Controller
export const updateVideoDetailsController = asyncHandler(async (req, res) => {
  /**
   * TODO: Get Video Id from Params
   * TODO: Get Data from Frontend
   * TODO: Validate Input
   * TODO: Update Video Details
   * TODO: Send Response
   * **/

  // * Get Video Id from Params
  const { id } = req.params;

  // * Validate Video Id
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new ApiError(400, "Invalid video id");
  }

  // * Find Video by Id
  const videoExist = await Video.findById(id);
  if (!videoExist) throw new ApiError(404, "Video not found");

  // * Get Data from Frontend
  const { title, description, duration, category, genres } = req.body;

  // * Update Video Details
  if (title) videoExist.title = title;
  if (description) videoExist.description = description;
  if (duration) videoExist.duration = duration;
  if (category) videoExist.category = category;
  if (genres) videoExist.genres = genres;
  await videoExist.save();

  // * Sending Response
  res
    .status(200)
    .json(new ApiResponse(200, videoExist, "Video updated successfully!"));
});

// Delete Video Controller
export const deleteVideoController = asyncHandler(async (req, res) => {
  /**
   * TODO: Get Id from params
   * TODO: Search Video and Delete
   * TODO: Sending Response
   * **/

  // * Get Id from Query
  const { id } = req.params;

  // * Validate Video Id
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new ApiError(400, "Invalid video id");
  }

  // * Find Video by Id
  const video = await Video.findByIdAndDelete(id);
  if (!video) throw new ApiError(404, "Video not found");

  // * Sending Response
  res
    .status(200)
    .json(new ApiResponse(200, null, "Video deleted successfully!"));
});
