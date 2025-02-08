import mongoose from "mongoose";

import Genre from "../models/genre.model.js";
import ApiError from "../utils/apiError.js";
import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/apiResponse.js";
import { notEmptyValidation } from "../utils/validators.js";

// Fetch All Genres Controller
export const fetchGenreController = asyncHandler(async (req, res) => {
  /**
   * TODO: Get All Genres
   * TODO: Sending Response
   * **/

  // * Get All Genres
  const genres = await Genre.find();

  // * Sending Response
  res
    .status(200)
    .json(new ApiResponse(200, genres, "Fetched Genres Successfully!"));
});
