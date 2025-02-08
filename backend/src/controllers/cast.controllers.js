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

// Fetch Cast Detail Controller
export const fetchCastDetailController = asyncHandler(async (req, res) => {
  /**
   * TODO: Get Id from Params
   * TODO: Fetch Detail
   * TODO: Sending Response
   * **/

  // * Get Id from Params
  const { id } = req.params;

  // * Validate ObjectId
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new ApiError(400, "Invalid Cast ID");
  }

  // * Get Single Cast
  const cast = await Cast.findById(id);

  // * Check if Cast exists
  if (!cast) throw new ApiError(404, "Cast not found");

  // * Sending Response
  res
    .status(200)
    .json(new ApiResponse(200, cast, "Fetched Cast Details Successfully!"));
});
