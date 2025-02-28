import Video from "../models/video.model.js";
import ApiError from "../utils/apiError.js";
import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/apiResponse.js";
import {} from "../utils/validators.js";

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
