import mongoose from "mongoose";

import Cast from "../models/cast.model.js";
import ApiError from "../utils/apiError.js";
import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/apiResponse.js";

// Fetch All Casts Controller
export const fetchCastsController = asyncHandler(async (req, res) => {
  /**
   * TODO: Get All Casts
   * TODO: Sending Response
   * **/

  // * Get all Casts
  const casts = await Cast.find();

  // * Sending Response
  res
    .status(200)
    .json(new ApiResponse(200, casts, "Fetched Casts Successfully!"));
});
